import fs from "node:fs"

const FILE_PATH = "./src/streams/files/fileToWrite.txt"

const write = async () => {
    const writeStream = fs.createWriteStream(FILE_PATH)
    process.stdin.pipe(writeStream)
};

await write();