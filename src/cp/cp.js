import { fork } from "node:child_process"
import path from "node:path";

const spawnChildProcess = async (args) => {
    const cp = fork(path.resolve("./src/cp/files/script.js"), args, {stdio: "pipe"})

    cp.stdout.pipe(process.stdout)
    process.stdin.pipe(cp.stdin)
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ["hello", "world"]);
