describe('app', function ()
{
    'use strict';

    var app = window.app;

    describe('reverseNumber', function () {
        it('should reverse the number', function () {
            expect(app.reverseNumber(1234)).toEqual(4321);
            expect(app.reverseNumber(77434)).toBe(43477);
        });
        it('should reverse the number from "number string"', function () {
            expect(app.reverseNumber('3334433')).toBe(3344333);
            expect(app.reverseNumber('1234433')).toEqual(3344321);
        });
        it('should not return a string', function () {
            expect(app.reverseNumber(1234)).not.toBe('4321');
            expect(app.reverseNumber(5210)).not.toEqual('0125');
        });
        it('should not accept not number as an argument', function () {
            expect(app.reverseNumber([3,3])).toEqual(false);
            expect(app.reverseNumber('12sw')).toBe(false);
        });
        it('should return single number', function () {
            expect(app.reverseNumber(5)).toBe(5);
            expect(app.reverseNumber(7)).toEqual(7);
        });
    });
});
