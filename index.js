const addFunc = require('./functions/add');
const parseFunc = require('./functions/parse');

// const arguments = process.argv;
// console.log('passed arguments', arguments[2]);

// addFunc();

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers to be added: ", (numbers) => {
    const numArray = parseFunc(numbers);
    const sum = addFunc(numArray);
    console.log(`The sum is: ${sum}`);
    rl.close();
});