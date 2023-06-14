import fs from "node:fs/promises"
import path from "node:path";

const FILE_TO_REMOVE = path.resolve("./src/fs/files/fileToRemove.txt")

const remove = async () => {
    fs.unlink(FILE_TO_REMOVE).catch((_) => {
        throw new Error("FS operation failed")
    })
};

await remove();