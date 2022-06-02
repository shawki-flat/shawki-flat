module.exports = {
  branches: ["main"],
  plugins: [
    ["@semantic-release/commit-analyzer", { preset: "eslint" }],
    ["@semantic-release/release-notes-generator", { preset: "eslint" }],
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json", "dist"],
        message: "Chore: Release a new version of our package",
      },
    ],
  ],
};
