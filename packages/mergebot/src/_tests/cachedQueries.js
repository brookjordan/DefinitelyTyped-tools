module.exports = ((h) => ({
  getProjectBoardColumns:
    ((h = []),
    new Map([
      ["Needs Maintainer Action", "f75ad846"],
      ["Needs Maintainer Review", "47fc9ee4"],
      ["Waiting for Code Reviews", "98236657"],
      ["Needs Author Action", "d389394c"],
      ["Waiting for Author to Merge", "7da042bf"],
      ["Recently Merged", "fee515dc"],
      ["Other", "4ab7a682"],
    ])),
  getLabels: [
    { id: "MDU6TGFiZWw0MDUzNDEwNjk=", name: "@types", __typename: "Label" },
    { id: "MDU6TGFiZWw2NDQxMTYxNzA=", name: "Abandoned", __typename: "Label" },
    {
      id: "MDU6TGFiZWw3OTg3Mzc0Nzg=",
      name: "Author is Owner",
      __typename: "Label",
    },
    {
      id: "LA_kwDOAFz6BM7QXorW",
      name: "Blocked upstream",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwyMTU0ODE2NTQ5",
      name: "Check Config",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwxNjA4NjM0NDg0",
      name: "Critical package",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwxNTY4Nzg5MA==",
      name: "Definition:Bug",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWw4ODk3OTYxOA==",
      name: "Definition:Creating",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwxNTY4Nzg5Mg==",
      name: "Definition:Enhancement",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwyOTM4NjAwOA==",
      name: "Definition:Missing",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwyMzcwODQxMw==",
      name: "Definition:Request",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwyMTg2MTM4MjI0",
      name: "dependencies",
      __typename: "Label",
    },
    { id: "MDU6TGFiZWw1NjcxNzAyMQ==", name: "Discussion", __typename: "Label" },
    { id: "MDU6TGFiZWw3NTcxMTk0Ng==", name: "Documents", __typename: "Label" },
    { id: "MDU6TGFiZWwzMDI2OTUyNQ==", name: "Duplicate", __typename: "Label" },
    {
      id: "MDU6TGFiZWwxNjA4MjA4ODM1",
      name: "Edits Infrastructure",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwxNjA4MjEwODMz",
      name: "Edits multiple packages",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwyNDk1OTc2ODI5",
      name: "Edits Owners",
      __typename: "Label",
    },
    { id: "LA_kwDOAFz6BM71Jg4R", name: "github_actions", __typename: "Label" },
    {
      id: "MDU6TGFiZWw1ODMyOTQ0NzQ=",
      name: "Has Merge Conflict",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwzMzUzMTYyNTAy",
      name: "Huge Change",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwzMDI2OTc0NQ==",
      name: "Infrastructure",
      __typename: "Label",
    },
    { id: "MDU6TGFiZWwzMDI2OTUzOA==", name: "invalid", __typename: "Label" },
    {
      id: "LA_kwDOAFz6BM8AAAABXw1nPg",
      name: "javascript",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWw1NjcxNDU5MQ==",
      name: "Level:Advanced",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWw1NjcxNDU3Mg==",
      name: "Level:Intermediate",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWw1NjcxNDU3MQ==",
      name: "Level:Starter",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwxNjA4NTUyNDEw",
      name: "Maintainer Approved",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwyMTk3MzU2OTA1",
      name: "Mergebot Error",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwyNTI5Mjc2Njc2",
      name: "Multiple Languages",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWw2NDY3ODg4ODg=",
      name: "New Definition",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwyMTU0ODU3ODAw",
      name: "No Other Owners",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWw1ODYxNzcwNjM=",
      name: "Other Approved",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWw5MDUzMzQwOTU=",
      name: "Owner Approved",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwxNTk2MTk1ODI0",
      name: "Perf: Better",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwxNTk2MTk4NTgw",
      name: "Perf: Mixed",
      __typename: "Label",
    },
    { id: "MDU6TGFiZWwxNTk2MTk0NzQ0", name: "Perf: Same", __typename: "Label" },
    {
      id: "MDU6TGFiZWwxNTk2MTk5Mjg2",
      name: "Perf: Worse",
      __typename: "Label",
    },
    {
      id: "LA_kwDOAFz6BM8AAAABj4hH1Q",
      name: "pkg: react@19.0.x",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWw2ODQzMjE1NzY=",
      name: "Popular package",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwyOTUzOTk4NzE4",
      name: "Possibly Edits Infrastructure",
      __typename: "Label",
    },
    { id: "MDU6TGFiZWwxNTY4Nzg5NA==", name: "Question", __typename: "Label" },
    {
      id: "MDU6TGFiZWwzOTU2NzkwNTk=",
      name: "Revision needed",
      __typename: "Label",
    },
    { id: "MDU6TGFiZWw2OTcwMTg5NzI=", name: "Self Merge", __typename: "Label" },
    {
      id: "MDU6TGFiZWw1NjcxNDI1Mg==",
      name: "Target:Browser",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWw1NjcxNDI0NQ==",
      name: "Target:NodeJS",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwyMDk2NzQzNjAw",
      name: "The CI failed",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwyOTUzOTk2NDAx",
      name: "The CI is blocked",
      __typename: "Label",
    },
    {
      id: "LA_kwDOAFz6BM8AAAABEGgY4Q",
      name: "Too Many Files",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwyMTU2MzIyMzcx",
      name: "Too Many Owners",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwzMjAzMjg3Mg==",
      name: "TypeScript-Core",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWw2NDQwOTUzNDI=",
      name: "Unmergeable",
      __typename: "Label",
    },
    { id: "MDU6TGFiZWw2NDQwOTU4ODI=", name: "Unmerged", __typename: "Label" },
    { id: "MDU6TGFiZWw2NDY3ODkyMDU=", name: "Unowned", __typename: "Label" },
    { id: "MDU6TGFiZWwyNDYyODA0MzE1", name: "Unreviewed", __typename: "Label" },
    {
      id: "MDU6TGFiZWwyMTU0NzUwNDcz",
      name: "Untested Change",
      __typename: "Label",
    },
    {
      id: "MDU6TGFiZWwyMDk2NzQ1NzQx",
      name: "Where is GH Actions?",
      __typename: "Label",
    },
  ],
}))();
