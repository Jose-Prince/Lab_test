import { useState } from 'react'
import './Style.css'

interface ContainerProps {
    label: string
    setInput: (input: string) => void
    input: string
}

const StandardButton: React.FC<ContainerProps> = ({label, setInput, input}) => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(true)
        setInput(input + label)
        setTimeout(() => setClicked(false), 100)
    }

    return (
        <button
            className={clicked ? 'standardButton clicked' : 'standardButton'}
            onClick={handleClick}
        >
            {label}
        </button>
    )
}

export default StandardButton