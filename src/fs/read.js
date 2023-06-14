import fs from "node:fs/promises"
import path from "node:path";

const FILE_PATH = path.resolve("./src/fs/files/fileToRead.txt")

const read = async () => {
    const buff = await fs.readFile(FILE_PATH).catch((_) => {
        throw new Error("FS operation failed")
    })
    console.log(buff.toString())
};

await read();