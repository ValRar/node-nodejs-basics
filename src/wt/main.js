import { Worker } from "node:worker_threads"
import { availableParallelism } from "node:os";
import path from "node:path";
import { EventEmitter } from "node:events";

const WORKER_FILE_NAME = path.resolve("./src/wt/worker.js")
const result = []
const eventEmitter = new EventEmitter()

eventEmitter.on("workersStop", () => {
    console.log(result)
})

const performCalculations = async () => {

    let numberOfCPUs = availableParallelism()
    for (let i = 0;i < numberOfCPUs; i++) {
        const data = i + 10
        const worker = new Worker(WORKER_FILE_NAME, {workerData: {data, index: i}})
        worker.on("message", (content) => {
            result[+content.index] = {status: "resolved", data: content.result}
        })
        worker.on("error", (err) => {
            result.push({status: "error", data: null})
            numberOfCPUs--
            if (numberOfCPUs === 0) eventEmitter.emit("workersStop")
        })
        worker.on("exit", () => {
            numberOfCPUs--
            if (numberOfCPUs === 0) eventEmitter.emit("workersStop")
        })
    }
};

await performCalculations();