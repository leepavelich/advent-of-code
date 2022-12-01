export const sum = (arr) => arr.reduce((a, b) => a + b, 0);

export const prod = (arr) => arr.reduce((a, b) => a * b, 1);

export const largest = (arr) => arr.sort((a, b) => b - a)[0];

export const smallest = (arr) => arr.sort((a, b) => a - b)[0];
