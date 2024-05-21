export function convertor(value: string) {
    if (value.includes('.')) {
        return parseFloat(value)
    }

    return parseInt(value)
}

export function convertorInput(value: string) {
    
    if (value.length > 9 && !value.includes('.')) {
        if (value.length < 100 && value.length > 10) {
            return parseInt(value).toExponential(3).toString()
        } else if (value.length >= 100){
            return parseInt(value).toExponential(2).toString()
        }
        return parseInt(value).toExponential(4).toString()
    }

    return value
}