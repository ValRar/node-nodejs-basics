const parseArgs = () => {
    console.log(process.argv)
    process.argv.join(" ").split("--").map((arg) => {
        // console.log(arg)
        const parsedArg = arg.split(" ")
        console.log(parsedArg[0] + " is " + parsedArg[1])
    })
};

parseArgs();