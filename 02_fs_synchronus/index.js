// const fs = require('fs');

// blocking code

// console.log('starting Operation');

// read the file
// const buffer = fs.readFileSync('data.txt');
// console.log(buffer);
// console.log(buffer.toString());

// const buffer = fs.readFileSync('data.txt', { encoding: 'utf-8' });
// console.log(buffer.toString());
// console.log(buffer);

// ---------------------------------------------------------

// create a file
// try {
//   fs.writeFileSync('dummy.txt', 'Name: Murli, Age: 27, Salary: 1000000\n');
// } catch (error) {
//   console.log('error in writing file', error);
// }

// ---------------------------------------------------------

// append into existing file
// try {
//   fs.appendFileSync('employee.txt', 'Name: Pratik, Age: 10, Salary: 0\n');
// } catch (error) {
//   console.log('error in adding data into file', error);
// }

// ---------------------------------------------------------

// delete a file
// try {
//   fs.unlinkSync('dummy.txt');
// } catch (error) {
//   console.log('error in deleting file', error);
// }

// ---------------------------------------------------------

console.log('ending Operation');