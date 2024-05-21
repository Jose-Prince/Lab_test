import { useState } from "react"
import { operationL } from '../logic/operation';
import { convertor } from "../logic/convertor";
import './Style.css'

interface ContainerProps { 
    label: string;
    setInput: (input: string) => void
    setOperation: (operation: string) => void
    operation: string
    input: string
    result : string
    setResult: (result: string) => void
}

const LargeButton: React.FC<ContainerProps> = ({label, setInput, input, setOperation, operation, result, setResult}) => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        // Escapa el punto en la expresión regular
        const matches = input.match(/\./g);
        const count = matches ? matches.length : 0;

        const isOperator = /[+\-X/%]/.test(label)

        setClicked(true);

        if (isOperator) {
            if (input.length !== 0 && result === '') {
                if (/[+\-X/%]/.test(input) && input != '=') {
                    setInput(label)
                } else {
                    if (operation.includes(' ')){
                        const listOp = operation.split(' ')
                        const resultValue = operationL(convertor(listOp[0]), convertor(input), listOp[1])
                        if (resultValue != undefined) {
                            setOperation(resultValue)
                            setInput(label)
                        }
                    } else {
                        setOperation(input)
                        setInput(label)
                    }
                }
            }
        } else if (!(label === '.' && count >= 1 ) && label !== '=') {
            if (input.length !== 0 && /[+\-X/%]/.test(input) && input != '=') {
                setOperation(operation + ' ' + input)
                setInput(label)
            } else if (result === '') {
                setInput(input + label)
            } else {
                setInput(label)
                setResult('')
                setOperation('')
            }
        
        } else if (label === '=') {
            const listOp = operation.split(' ')
            const resultValue = operationL(convertor(listOp[0]), convertor(input), listOp[1])
            if (resultValue != undefined) {
                setResult(resultValue)
            }
        }
        setTimeout(() => setClicked(false), 100)
    }

    return (
        <button 
            className={clicked ? 'largeButton clicked' : 'largeButton'}
            onClick={handleClick}
        >
            {label}
        </button>
    )
}

export default LargeButton