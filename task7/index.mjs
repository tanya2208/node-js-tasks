import { promises as fs } from "fs";

const dir = "directory"
try {
  const files = await fs.readdir(dir);
  if(files.length == 0){
    fs.rmdir(dir)
  }
} catch (err) {
  console.error(err);
}