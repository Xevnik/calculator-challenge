/**
 * parses the user input for the numbers to be added
 * @param string - string of delimited numbers
 * @return [int] = array of integers
 */
module.exports = (userInput) => {
    // find \n and replace with comma for splitting
    const newLineRegex = /\\n/g;
    const withoutNewLines = userInput.replace(newLineRegex, ',');
    let numArray = withoutNewLines.split(',');

    let negativeNums = [];
    let positiveNums = [];
    numArray
        .map(num => parseInt(num, 10))
        .forEach(num => {
            console.log(num, typeof num)
            if (num > -1) {
                positiveNums = [...positiveNums, num];
            // filter for negative numbers only. Ignore non-numbers
            } else if (Number.isInteger(num)) {
                negativeNums = [...negativeNums, num];
            }
        });
    console.log(positiveNums);
    console.log(negativeNums)
    if (negativeNums.length) throw new Error(`Negative numbers ${[negativeNums]} provided`);
    return positiveNums;
};