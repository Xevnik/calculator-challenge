/**
 * parses the user input for the numbers to be added
 * @param string - string of delimited numbers
 * @return [int] = array of integers
 */
module.exports = (userInput) => {
    // parse for custom single character delimiters
    const customDelimiterRegex = /\/\/(.*?)\\n/;
    let customDelimiter = userInput.match(customDelimiterRegex);
    if (customDelimiter) {
        customDelimiter = customDelimiter[1];
        userInput = userInput.replace(customDelimiterRegex, '');
        userInput = userInput.replace(new RegExp(customDelimiter, 'gi'), ',');
    }
    console.log(userInput)
    // find \n and replace with comma for splitting
    const newLineRegex = /\\n/g;
    const withoutNewLines = userInput.replace(newLineRegex, ',');
    let numArray = withoutNewLines.split(',');

    // separates postive numbers from negative and trash values
    let negativeNums = [];
    let positiveNums = [];
    numArray
        .map(num => parseInt(num, 10))
        .forEach(num => {
            if (num > -1 && num < 1000) {
                positiveNums = [...positiveNums, num];
            // filter for negative numbers only. Ignore non-numbers
            } else if (Number.isInteger(num) && num < 0) {
                negativeNums = [...negativeNums, num];
            }
        });
    if (negativeNums.length) throw new Error(`Negative numbers ${[negativeNums]} provided`);
    return positiveNums;
};