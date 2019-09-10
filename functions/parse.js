/**
 * parses the user input for the numbers to be added
 * @param string - string of delimited numbers
 * @return [int] = array of integers
 */
module.exports = (userInput) => {
    let numArray = userInput.split(',');
    numArray = numArray
                .map(num => parseInt(num, 10))
                .filter(num => num);
    return numArray;
};