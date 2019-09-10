import parse from '../../functions/parse';

describe('Unit tests for the parse function', () => {
    it('given an empty string, empty array is returned', () => {
        expect(parse('')).to.deep.equal([]);
    });
    it('Given two comma-separted numbers, return array of int', () => {
        expect(parse('3,4')).to.deep.equal([3, 4]);
    });
    it('Given non-number string, 0 is returned instead', () => {
        expect(parse('5, tytyty')).to.deep.equal([5]);
    });
});