const ZERO = 0;
const ONE = 1;

export const add = (a, b) => a + b;
export const mul = (a, b) => a * b;

export const sum = (...args) => args.reduce(add, ZERO);
export const product = (...args) => args.reduce(mul, ONE);
