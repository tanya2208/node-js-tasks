import { promises as fs } from "fs";

const filePath = "file.txt";
try {
  const data = await fs.readFile(filePath, "binary");
  let newData = data.toUpperCase();
  fs.writeFile(filePath, newData, "utf-8", function (err) {
    if (err) throw err;
  });
} catch (e) {
  console.log(e);
}
