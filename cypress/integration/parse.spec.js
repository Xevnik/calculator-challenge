import parse from '../../functions/parse';
import { isSymbol } from 'util';

describe('Unit tests for the parse function', () => {
    it('given an empty string, empty array is returned', () => {
        expect(parse('')).to.deep.equal([]);
    });
    it('Given two comma-separted numbers, return array of int', () => {
        expect(parse('3, 4')).to.deep.equal([3, 4]);
    });
    it('Given non-number string, non-number is skipped', () => {
        expect(parse('5, tytyty')).to.deep.equal([5]);
    });
    it('Given many comma-separated numbers, return array of all given numbers', () => {
        expect(parse('1,2,3,4,5,6,7,8,9,10,11,12')).to.deep.equal(
            [1,2,3,4,5,6,7,8,9,10,11,12]
        );
    });
    it('\n is recognized as a delimiter in addition to commas', () => {
        expect(parse("1\\n2,3")).to.deep.equal([1, 2, 3]);
        expect(parse("1 \\n2 \\n3\\n 4, 5")).to.deep.equal([1, 2, 3, 4, 5]);
    });
    it('Negative numbers are denied and an error will be thrown', () => {
        expect(() => parse('1, 2, -3, 5, -6')).to.throw('Negative numbers -3,-6 provided');
    });
    it('Numbers greater than 1000 are ignored', () => {
        expect(parse('2, 1001, 6')).to.deep.equal([2, 6]);
        expect(parse('2, 1001, 6, 9001')).to.deep.equal([2, 6]);
    });
    it('Single character custom delimiter are supported', () => {
        expect(parse('//;\\n2;5;6')).to.deep.equal([2, 5, 6]);
    });
    it('Custom delimiter with newline does not include second instance of newline', () => {
        expect(parse('//;\\n2;5;6\\n3')).to.deep.equal([2, 5, 6, 3]);
    });
    it('Custom delimiters of any lengths are supported //[{delimiter}]\\n{numbers} eg. \\[***]\n11***22***33', () => {
        expect(parse("//[***]\\n11***22***33")).to.deep.equal([11, 22, 33]);
        expect(parse("//[*;?]\\n11*;?22*;?33")).to.deep.equal([11, 22, 33]);
        expect(parse("//[abc]\\n11abc22abc33")).to.deep.equal([11, 22, 33]);
    });
    it('Multiple custom delimiter of any length works', () => {
        expect(parse("\/\/[\*][!!][r9r]\\n11r9r22*33!!44")).to.deep.equal([11, 22, 33, 44]);
    });
});
