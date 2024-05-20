import {expect, test} from 'vitest'
import { convertor } from "../logic/convertor";

test('convert string to number', () => {
    expect(convertor('12.45')).toBe(12.45)
})

test('converts negative to number', () => {
    expect(convertor('-15')).toBe(-15)
})