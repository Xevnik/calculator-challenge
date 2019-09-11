/**
 * parses the user input for the numbers to be added
 * @param string - string of delimited numbers
 * @return [int] = array of integers
 */
module.exports = (userInput) => {
    // parse for custom character delimiters
    const customDelimiterRegex = /\/\/\[?(.*?)\]?\\n/;
    let customDelimiter = userInput.match(customDelimiterRegex);

    if (customDelimiter) {
        // grab the custom delimiter
        customDelimiter = customDelimiter[1];
        // if delimiter has special characters, than escape them
        customDelimiter = customDelimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
        // remove declaration of custom delimiter, so that only numbers are left
        userInput = userInput.replace(customDelimiterRegex, '');
        userInput = userInput.replace(new RegExp(customDelimiter, 'g'), ',');
    }

    // find \n and replace with comma for splitting
    const newLineRegex = /\\n/g;
    const withoutNewLines = userInput.replace(newLineRegex, ',');
    let numArray = withoutNewLines.split(',');
    console.log(numArray)

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