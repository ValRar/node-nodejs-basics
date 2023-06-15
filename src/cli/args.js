const parseArgs = () => {
    process.argv.map((arg) => {
        if (/^--/.test(arg)) {
            const parsedArg = arg.slice(2).split("=")
            console.log(parsedArg[0] + " is " + parsedArg[1])
        }
    })
};

parseArgs();