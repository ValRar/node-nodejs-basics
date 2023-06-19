const parseArgs = () => {
    for (let i = 0; i < process.argv.length; ++i) {
        if (/^--/.test(process.argv[i])) {
            console.log(process.argv[i].slice(2) + " is " + process.argv[++i])
        }
    }
};

parseArgs();