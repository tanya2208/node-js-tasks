import * as fs from "fs"

const directory = '../task6/index.js'

if (fs.existsSync(directory)) {
    console.log('Exists!')
  } else {
    console.log('Not found.')
}