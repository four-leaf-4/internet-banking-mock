const fs = require("fs");
const path = require("path");

const reImportStateent = /^(import .*from\s+)"(.+)";$/;
const renameImportStatement = (line, filename) => {
  const matched = reImportStateent.exec(line);
  if (!matched) {
    return line;
  }

  if (!matched[2].startsWith("../")) {
    return line;
  }

  const source = path.join(path.dirname(filename), matched[2]);

  if (filename.startsWith("src/components")) {
    const componentName = filename.split("/")[2];
    if (source.startsWith(`src/components/${componentName}/`)) {
      return line;
    }
  }

  return `${matched[1]}"${source.replace(/^src/, "~")}"`;
};

const rewriteImports = (filename) => {
  const content = fs.readFileSync(filename, { encoding: "utf-8" });
  const newContent = content
    .split("\n")
    .map((line) => {
      return renameImportStatement(line, filename);
    })
    .join("\n");
  fs.writeFileSync(filename, newContent, { encoding: "utf-8" });
};

const traversePath = (name) => {
  fs.readdirSync(name, { withFileTypes: true }).forEach((entry) => {
    const filename = path.join(name, entry.name);
    if (entry.isDirectory()) {
      traversePath(filename);
    } else {
      rewriteImports(filename);
    }
  });
};

traversePath("src");
