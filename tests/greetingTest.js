const { expect } = require('chai');
const { getGreetingDependOnTime } = require('../public/js/auxiliaryAPI');

describe('getGreetingDependOnTime()', function () {

    it('should return Guten Morgen at 08:00', function () {
        const testDate = new Date(2020, 0, 1, 8, 0);

        expect(getGreetingDependOnTime(testDate)).to.equal('Guten Morgen');
    });

it('should return Guten Abend at 22:00', function () {
    const testDate = new Date(2020, 0, 1, 22, 0);

    expect(getGreetingDependOnTime(testDate)).to.equal('Guten Abend');
});


it('should return Guten Abend before 06:00', function () {
    const testDate = new Date(2020, 0, 1, 5, 59);
    expect(getGreetingDependOnTime(testDate)).to.equal('Guten Abend');
});

it('should return Guten Morgen at 06:00', function () {
    const testDate = new Date(2020, 0, 1, 6, 0);
    expect(getGreetingDependOnTime(testDate)).to.equal('Guten Morgen');
});

it('should return Guten Morgen before 22:00', function () {
    const testDate = new Date(2020, 0, 1, 21, 59);
    expect(getGreetingDependOnTime(testDate)).to.equal('Guten Morgen');
});

});