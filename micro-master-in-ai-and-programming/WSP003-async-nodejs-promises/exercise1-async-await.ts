import fs, { Stats } from 'fs';
// fs.promises.readdir
// fs.promises.stat
const myPath: string = "/Users/tien/Development/software-engineer-bootcamp/micro-master-in-ai-and-programming/WSP003-async-nodejs-promises/node_modules/ts-node/dist";

async function listAllJs(targetPath: string): Promise<void> {
    try {
        const files: string[] = await fs.promises.readdir(targetPath);
        for (const file of files) {
            const filePath = `${targetPath}/${file}`;
            const fileStat: Stats = await fs.promises.stat(filePath);
      
            if (fileStat.isFile() && file.endsWith('.js')) {
              console.log(filePath);
            }
          }
    } catch (error) {
        console.error('Error:', error);
    }
}

listAllJs(myPath).catch(console.error);