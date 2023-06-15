const parseEnv = () => {
    Object.keys(process.env).map((key) => {
        if (/^RSS_/.test(key)) console.log(key + "=" + process.env[key] + ";")
    })
};

parseEnv();