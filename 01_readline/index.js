const readline = require('readline');

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// sum of 2 number
interface.question('Enter the first number: ', (answer1) => {
  interface.question('Enter the second number: ', (answer2) => {
    const sum = Number(answer1) + Number(answer2);
    interface.write(`sum: ${sum}\n`);
    interface.close();
  });
});
