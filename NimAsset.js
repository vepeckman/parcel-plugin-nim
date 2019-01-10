const { spawn } = require("child_process");
const fs = require("fs");

const { Asset } = require("parcel-bundler");

function nimCompile (path) {
    return new Promise((resolve, reject) => {
        const compile = spawn("nim", ["js", path])
        let out = "";
        let err = "";
        
        compile.stdout.on("data", (data) => {
            out = out + data;
        })

        compile.stderr.on("data", (data) => {
            err = err + data;
        })

        compile.on("close", (exitCode) => {
            if (exitCode === 0) {
                resolve(out);
            } else {
                reject(err);
            }
        })
    })
}

function read (path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        })
    })
}

function compileFilePath (path) {
    let pathParts = path.split("/");
    const idx = pathParts.length - 1;
    let nimFile = pathParts[idx];
    let fileNameParts = nimFile.split(".");
    fileNameParts[fileNameParts.length - 1] = "js"
    const fileName = fileNameParts.join(".");
    pathParts[idx] = "nimcache/" + fileName;
    return pathParts.join("/");
}

class NimAsset extends Asset {
    
    constructor(name, options) {
        super(name, options);
        this.type = "js";
    }

    async generate() {
        await nimCompile(this.name);
        let code = await read(compileFilePath(this.name))
        return [
            {
                type: "js",
                value: code
            }
        ]
    }

}

module.exports = NimAsset;
