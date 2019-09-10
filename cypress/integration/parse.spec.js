import parse from '../../functions/parse';
import { isSymbol } from 'util';

describe('Unit tests for the parse function', () => {
    it('given an empty string, empty array is returned', () => {
        expect(parse('')).to.deep.equal([]);
    });
    it('Given two comma-separted numbers, return array of int', () => {
        expect(parse('3,4')).to.deep.equal([3, 4]);
    });
    it('Given non-number string, non-number is skipped', () => {
        expect(parse('5, tytyty')).to.deep.equal([5]);
    });
    it('Given many comma-separated numbers, return array of all given numbers', () => {
        expect(parse('1,2,3,4,5,6,7,8,9,10,11,12')).to.deep.equal(
            [1,2,3,4,5,6,7,8,9,10,11,12]
        );
    })
});