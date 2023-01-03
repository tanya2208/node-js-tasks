import { promises as fs } from "fs";

try {
  const files = await fs.readdir("directory");
  for (const file of files) console.log(file);
} catch (err) {
  console.error(err);
}
