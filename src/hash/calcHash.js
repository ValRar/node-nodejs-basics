import crypto from "node:crypto"
import fs from "node:fs"

const calculateHash = async () => {
    const stream = fs.createReadStream("./src/hash/files/fileToCalculateHashFor.txt")
    const hash = crypto.createHash("sha256")
    stream.on("readable", () => {
        const data = stream.read()
        if (data) hash.update(data)
        else console.log(hash.digest("hex"))
    })
};

await calculateHash();