import fs from "node:fs/promises"
import {existsSync} from "node:fs"
import path from "node:path";

const OLD_PATH = path.resolve("./src/fs/files/")
const NEW_PATH = path.resolve("./src/fs/files_copy/")

const copy = async () => {
    if (existsSync(NEW_PATH)) throw new Error("FS operation failed")
    fs.mkdir(NEW_PATH, {recursive: false})
    const oldDir = await fs.opendir(OLD_PATH).catch((_) => {
        throw new Error("FS operation failed")
    });
    for await (const dirEnt of oldDir) {
        if (dirEnt.isFile()) {
            fs.writeFile(path.join(NEW_PATH, dirEnt.name), await fs.readFile(path.join(OLD_PATH, dirEnt.name)))
        } 
    }
}
await copy();
