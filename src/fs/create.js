import fs from "node:fs"
import path from "node:path";
const FILE_PATH = path.resolve("./src/fs/files/fresh.txt")

const create = async () => {
    if (fs.existsSync(FILE_PATH)) throw new Error("FS operation failed")
    fs.writeFile(FILE_PATH, "I am fresh and young", (err) => {
        if (err) console.log(err)
    })
};

await create();