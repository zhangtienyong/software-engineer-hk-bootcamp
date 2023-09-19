const fs = require('fs');

const myPath = "/Users/tien/Development/software-engineer-bootcamp/micro-master-in-ai-and-programming/WSP003-async-nodejs-promises/node_modules/ts-node/dist";

function listAllJs(targetPath: string): Promise<string[]> {
  return new Promise<string[]>((resolve, reject): void => {
    fs.readdir(targetPath, (err: any, files: any): void => {
      if (err) {
        reject(err);
        return;
      }

      const jsFiles: any = files.filter((file: string): boolean => file.endsWith('.js'));

      resolve(jsFiles.map((file: string): string => `${targetPath}/${file}`));
    });
  });
}


listAllJs(myPath)
  .then((jsFiles: string[]): void => {
    console.log(jsFiles);
  })
  .catch((error: any): void => {
    console.error('Error:', error);
  });
