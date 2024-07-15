const fs = require('fs');

// non blocking code - async

// read file
// fs.readFile('data.txt', (err, data) => {
//   if(err) console.log('error in reading file', err);
//   else console.log(data.toString());
// })
// fs.readFile('data.txt', { encoding: 'utf-8' }, (err, data) => {
//   if(err) console.log('error in reading file', err);
//   else console.log(data);
// });

// -------------------------------------------------------------------

// create file
// fs.writeFile('data.txt', 'name: Aman Kumar\n', (err) => {
//   if(err) console.log('error in creating file', err);
//   else console.log('file created successfully');
// });

// -------------------------------------------------------------------

// append into existing file
// fs.appendFile('data.txt', 'name: Murli Kumar\n', (err) => {
//   if(err) console.log('error in appending file', err);
//   else console.log('updated file successfully');
// });

// -------------------------------------------------------------------

// delete a file
fs.unlink('dummy.txt', (err) => {
  if(err) console.log('error in deleting file', err);
  else console.log('file deleted successfully');
});