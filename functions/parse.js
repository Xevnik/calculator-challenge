/**
 * parses the user input for the numbers to be added
 * @param string - string of delimited numbers
 * @return [int] = array of integers
 */
module.exports = (userInput) => {
    // capture all delimiters declared between // and \n
    const delimiterRegex = /\/\/(.*?)\\n/;
    const delimiterGroups = userInput.match(delimiterRegex);

    let customDelimiter = [];
    // Any custom delimiters?
    if (delimiterGroups) {
        if (delimiterGroups[1].length > 1) {
            // grabs custom delimters when length of 1
            const re = /\[(.*?)\]/g;
            const extractedString = delimiterGroups[1];
            let foundDelimiter;
            while((foundDelimiter = re.exec(extractedString)) !== null) {
                customDelimiter = [...customDelimiter, foundDelimiter[1]];
            }
        } else {
            // delimiters is single character, just add to array
            customDelimiter = [...customDelimiter, delimiterGroups[1]];
        }

        if (customDelimiter.length) {
            // if delimiter has special characters, than escape them
            customDelimiter = customDelimiter.map(
                delimiter => delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
            );
            //create regex from custom delimiter
            const combinedRegex = customDelimiter.join('|');
            // remove delimiter declaration and replace delimiters with commas
            userInput = userInput.replace(delimiterRegex, '');
            userInput = userInput.replace(new RegExp(combinedRegex, 'g'), ',');
        }
    }
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
            } else {
                // if doing division and multiplication, 0 will matter
                positiveNums = [...positiveNums, 0];
            }
        });

    if (negativeNums.length) throw new Error(`Negative numbers ${[negativeNums]} provided`);

    return positiveNums;
};