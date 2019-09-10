/**
 * adds numbers of a passed array
 * @params [int] - array of numbers to be added
 * @returns int - sum of numbers in the array
 */
module.exports = (numbersToAdd) => {
    const sum = numbersToAdd.reduce((sum, num) => (sum + num), 0);
    return sum;
};