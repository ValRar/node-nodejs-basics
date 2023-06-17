import { Transform } from "node:stream"

const reverseTransform = new Transform({
    transform(chunk, _, callback) {
        const data = chunk.toString()
        callback(null, data.split("").reverse().join(""))
    }
})

const transform = async () => {
    process.stdin.pipe(reverseTransform)
    reverseTransform.pipe(process.stdout)
};

await transform();