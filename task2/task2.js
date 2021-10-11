import fs from "fs";
import csv from "csvtojson";

const readStream = fs.createReadStream("task2/csv/nodejs-hw1-ex1.csv");
const writeStream = fs.createWriteStream("task2/nodejs-hw1-ex1.txt");

const handleError = (e) => {
  if (e) {
    console.log(e);
  }
};

readStream
  .pipe(csv({ ignoreColumns: /(Amount)/ }))
  .on("error", (e) => {
    handleError(e);
  })
  .pipe(writeStream)
  .on("error", (e) => {
    handleError(e);
  });
