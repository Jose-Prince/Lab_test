import { useState } from "react"
import './Style.css'

interface ContainerProps { 
    label: string
}

const LargeButton: React.FC<ContainerProps> = ({label}) => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(true)
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