import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import * as fs from "fs";

const rl = readline.createInterface({ input, output });
const path = await rl.question("Enter file path: ");
rl.close();

fs.readFile(path, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
