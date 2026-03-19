const fs = require("fs");
const path = require("path");

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function processFiles() {
  ["components", "app"].forEach((dir) => {
    walkDir(dir, (filePath) => {
      if (filePath.endsWith(".ts") || filePath.endsWith(".tsx")) {
        let content = fs.readFileSync(filePath, "utf8");
        let newContent = content
          .replace(/from ["']lib\/shopify["']/g, "from 'lib/local'")
          .replace(
            /from ["']lib\/shopify\/types["']/g,
            "from 'lib/local/types'",
          );

        if (content !== newContent) {
          fs.writeFileSync(filePath, newContent, "utf8");
          console.log(`Updated imports in ${filePath}`);
        }
      }
    });
  });
}

processFiles();
