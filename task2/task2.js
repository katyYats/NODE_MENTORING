const fs = require("fs");
const csv = require("csvtojson");

const readStream = fs.createReadStream("task2/csv/example.csv");
const writeStream = fs.createWriteStream("task2/nodejs-hw1-ex1.txt");

const handleError = (e) => {
  if (e) {
    console.log(e);
  }
};

readStream
  .pipe(csv())
  .on("error", (e) => {
    handleError(e);
  })
  .pipe(writeStream)
  .on("error", (e) => {
    handleError(e);
  });
