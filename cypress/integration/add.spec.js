import add from '../../functions/add';

describe('Unit tests for the add function', () => {
    it('Empty array returns 0', () => {
        expect(add([])).to.equal(0);
    })
    it('add array of int', () => {
        expect(add([2,3])).to.equal(5);
        expect(add([1,2,3,4,5,6,7,8,9,10,11,12])).to.equal(78);
        expect(add([20])).to.equal(20);
    });
});