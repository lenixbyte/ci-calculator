const calculator = require('./calculator');
test('compound interest calculator', () => {
    expect(calculator.compoundInterest(100, 0.1, 2)).toBe(121);
}
);
test('simple interest calculator', () => {
    expect(calculator.simpleInterest(100, 10, 2)).toBe(20);
}
);