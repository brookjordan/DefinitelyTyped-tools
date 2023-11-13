import { TSESTree } from "@typescript-eslint/utils";
import { createRule, commentsMatching, findTypesPackage } from "../util";
import { isDeclarationPath, isTypesPackageName, typesPackageNameToRealName } from "@definitelytyped/utils";

type MessageId = "noImportOfDevDependencies" | "noReferenceOfDevDependencies";
const rule = createRule({
  name: "no-import-of-dev-dependencies",
  defaultOptions: [],
  meta: {
    type: "problem",
    docs: {
      description: "Forbid imports and references to devDependencies inside .d.ts files.",
    },
    messages: {
      noImportOfDevDependencies: `.d.ts files may not import packages in devDependencies.`,
      noReferenceOfDevDependencies: `.d.ts files may not triple-slash reference packages in devDependencies.`,
    },
    schema: [],
  },
  create(context) {
    if (!isDeclarationPath(context.getFilename())) {
      return {};
    }

    const info = findTypesPackage(context.getFilename());
    if (!info) {
      return {};
    }

    const packageJson = info.packageJson;
    if (!packageJson.devDependencies) {
      return {};
    }

    const devDeps = Object.keys(packageJson.devDependencies)
      .map((dep) => {
        if (isTypesPackageName(dep)) {
          return typesPackageNameToRealName(dep);
        }
        return dep;
      })
      .filter((dep) => dep !== info.realName && packageJson.dependencies?.[dep] === undefined); // TODO(jakebailey): add test for this case from https://github.com/microsoft/DefinitelyTyped-tools/pull/773

    commentsMatching(context.getSourceCode(), /<reference\s+types\s*=\s*"(.+)"\s*\/>/, (ref, comment) => {
      if (devDeps.includes(ref)) {
        report(comment, "noReferenceOfDevDependencies");
      }
    });

    return {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      ImportDeclaration(node) {
        if (devDeps.includes(node.source.value)) {
          context.report({
            messageId: "noImportOfDevDependencies",
            node,
          });
        }
      },
    };

    function report(comment: TSESTree.Comment, messageId: MessageId) {
      context.report({
        loc: {
          end: {
            column: comment.value.lastIndexOf(`"`),
            line: comment.loc.end.line,
          },
          start: {
            column: comment.value.indexOf(`"`) + 1,
            line: comment.loc.start.line,
          },
        },
        messageId,
      });
    }
  },
});

export = rule;
