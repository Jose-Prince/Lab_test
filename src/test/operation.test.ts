import {expect, test} from 'vitest'
import { operation } from "../logic/operation";

test('adds 1 + 2 to equal 3', () => {
    expect(operation(1,2,'+')).toBe('3')
})

test('scientific notation in sum for greater numbers', () => {
    expect(operation(7777777777,1111111111,'+')).toBe('8.8889e+9')
})

test('scientific notation for decimals',() => {
    expect(operation(1.111111111,1.111111111,'+')).toBe('2.2222e+0')
})

test('negative sum', () => {
    expect(operation(-3,-4,'+')).toBe('-7')
})

test('0 division', () => {
    expect(operation(4,0,'/')).toBe('ERROR: DENOMINATOR EQUALS 0')
})