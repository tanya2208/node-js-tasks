//This causes multiple logs on 1 change
// import { watch } from "node:fs";
// watch("file.txt", { encoding: "buffer" }, (eventType, filename) => {
//   if (filename && eventType === "change") {
//     console.log("File was changed");
//   }
// });

import chokidar from "chokidar"
chokidar.watch('file.txt').on('change', (event, path) => {
    console.log('Changed');
});