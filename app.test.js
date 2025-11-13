const {suma, resta} = require('./app');

test('suma 1 + 2 = 3',()=>{
    expect(suma(1, 2)).toBe(3)
});

test('resta 7 - 10 = -3',()=>{
    expect(resta(7, 10)).toBe(-3)
});