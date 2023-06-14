import fs from "node:fs/promises"
import path from "node:path";

const FILE_TO_RENAME = path.resolve("./src/fs/files/wrongFilename.txt")
const NEW_NAME = path.resolve("./src/fs/files/properFilename.md")

const rename = async () => {
    fs.rename(FILE_TO_RENAME, NEW_NAME).catch((_) => {
        throw new Error("FS operation failed")
    })
};

await rename();