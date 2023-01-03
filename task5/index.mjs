import * as fs from "fs";
import path from "path"

const getFiles = (dirPath, arrayOfFiles) => {
    let files = fs.readdirSync(dirPath)
    arrayOfFiles = arrayOfFiles || []

    files.forEach((file) => {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
        arrayOfFiles = getFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file))
    }
    })
    return arrayOfFiles
}

let result = getFiles("..")
console.log(result)