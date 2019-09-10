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
    numArray = numArray
                .map(num => parseInt(num, 10))
                .filter(num => num);
    return numArray;
};