export function convertor(value: string) {
    if (value.match('.')) {
        return parseFloat(value)
    }

    return parseInt(value)
}