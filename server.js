const fs = require("fs");

const route = "./views";
// creating file
fs.writeFileSync(`${route}/first.txt`, "first file created ");
fs.writeFileSync(`${route}/second.txt`, "second file created ");
fs.writeFileSync(`${route}/third.txt`, "third file created ");

fs.readFile(`${route}/first.txt`, (err, data1) => {
  fs.readFile(`${route}/second.txt`, (err, data2) => {
    fs.writeFile(
      `${route}/final.txt`,
      `${data1}\n ${data2} \n This is me creating the final text`,
      (err) => {
        console.log("Text file is created in final text file");
      }
    );
  });
});
