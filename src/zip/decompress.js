import { unzip } from "node:zlib"
import { createReadStream, write, writeFileSync } from "node:fs";
import path from "node:path";

const DESTINATION_PATH = path.resolve("./src/zip/files/fileToCompress.txt")
const SOURCE_FILE = path.resolve("./src/zip/files/archive.gz")

const decompress = async () => {
    const chunks = await readChunks(SOURCE_FILE)
    const archiveBuffer = Buffer.concat(chunks)
    unzip(archiveBuffer, (err, buffer) => {
        if (err) throw new Error("Error while unzipping file")
        writeFileSync(DESTINATION_PATH, buffer.toString("utf-8"), (err) => {
            if (err) throw new Error("Error while writing file")
        })
    })
};

const readChunks = (filePath) => {
    const promise = new Promise((resolve, reject) => {
        const archive = createReadStream(filePath)
        const data = []
        archive.on("data", (chunk) => {
            data.push(chunk)
        })
        archive.on("end", () => {
            resolve(data)
        })
        archive.on("error", (err) => {
            reject(err)
        })
    })
    return promise
}

await decompress();