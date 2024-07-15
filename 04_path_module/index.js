const fs = require('fs');
const path = require('path');

// read file in some other directory
const filePath = path.join('src', 'home', 'data.txt');
const filePathResolved = path.resolve('src', 'home', 'data.txt');

console.log(filePath);

console.log(filePathResolved); // absolute file path

// get the file extension
console.log(path.extname(filePath));

// async non blocking code to read the file
fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
  if(err) console.log('error in reading file');
  else console.log(data);
})
