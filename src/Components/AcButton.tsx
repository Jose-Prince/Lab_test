import { useState } from "react"
import './Style.css'

interface ContainerProps { 
    label: string
    setInput: (input: string) => void
    setOperation: (operation: string) => void
    setResult: (result: string) => void
}

const AcButton: React.FC<ContainerProps> = ({label, setInput, setOperation, setResult}) => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(true)
        setInput('')
        setOperation('')
        setOperation('')
        setTimeout(() => setClicked(false), 100)
    }

    return (
        <button 
            className={clicked ? 'acButton clicked' : 'acButton'}
            onClick={handleClick}
        >
            {label}
        </button>
    )
}

export default AcButton