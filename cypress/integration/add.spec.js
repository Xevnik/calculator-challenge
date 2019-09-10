import add from '../../functions/add';

describe('Unit tests for the add function', () => {
    it('Empty array returns 0', () => {
        expect(add([])).to.equal(0);
    })
    it('add array of int', () => {
        expect(add([2,3])).to.equal(5);
        expect(add([2,3,50])).to.equal(55);
        expect(add([20])).to.equal(20);
    });
});