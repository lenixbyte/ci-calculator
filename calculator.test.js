const calculator = require('./calculator');
test('compound interest calculator', () => {
    expect(calculator(100, 0.1, 2)).toBe(121);
}
);

