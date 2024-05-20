export function operation(a: number,b: number,sign: string) {
    let operation;
    switch (sign) {
        case '+':
            operation = a+b
            if (operation.toString().length > 9){
                return operation.toExponential(4).toString()
            }
            return (a+b).toString()
    
        case '-':
            operation = a-b
            if (operation.toString().length > 9){
                return operation.toExponential(4).toString()
            }
            return (a+b).toString()
        
        case '*':
            operation = a*b
            if (operation.toString().length > 9){
                return operation.toExponential(4).toString()
            }
            return (a*b).toString()
        
        case '/':
            operation = a/b
            if (operation.toString().length > 9){
                return operation.toExponential(4).toString()
            } else if (b == 0){
                return 'ERROR: DENOMINATOR EQUALS 0'
            }
            return (a/b).toString()

        case '%':
            operation = a%b
            if (operation.toString().length > 9){
                return operation.toExponential(4).toString()
            }
            return (a%b).toString()
    }
}