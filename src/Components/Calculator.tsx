import { useState } from 'react'
import ButtonsDisplay from './ButtonsDisplay'
import ScreenDisplay from './ScreenDisplay'
import './Style.css'

const Calculator: React.FC = () => {

    const [operation, setOperation] = useState('')
    const [input, setInput] = useState('')
    const [result, setResult] = useState('')

    return (
        <div className="calculator">
            <ScreenDisplay operation={operation} input={input} result={result}/>
            <ButtonsDisplay />
        </div>
    )
}

export default Calculator