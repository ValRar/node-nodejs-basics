import fs from "node:fs/promises"
import path from "node:path";

const FOLDER_PATH = path.resolve("./src/fs/files")

const list = async () => {
    const dir = await fs.opendir(FOLDER_PATH).catch((_) => {
        throw new Error("FS operation failed")
    })
    for await (const dirEnt of dir) {
        console.log(dirEnt.name)
    }
};

await list();