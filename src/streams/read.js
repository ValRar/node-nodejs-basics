import fs from "node:fs"
import path from "node:path";

const FILE_PATH = path.resolve("./src/streams/files/fileToRead.txt")

const read = async () => {
    const readStream = fs.createReadStream(FILE_PATH)
    readStream.pipe(process.stdout)
};

await read();