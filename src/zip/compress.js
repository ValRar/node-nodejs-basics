import { createGzip } from "node:zlib"
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import path from "node:path";

const SOURCE_FILE = path.resolve("./src/zip/files/fileToCompress.txt")
const DESTINATION_PATH = path.resolve("./src/zip/files/archive.gz")

const compress = async () => {
    const gzip = createGzip()
    const src = createReadStream(SOURCE_FILE)
    const destination = createWriteStream(DESTINATION_PATH)
    pipeline(src, gzip, destination, (err) => {
        if (err) throw new Error("Error while compressing")
    })
};

await compress();