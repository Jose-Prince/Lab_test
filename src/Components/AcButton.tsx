import { useState } from "react"
import './Style.css'

interface ContainerProps { 
    label: string
}

const AcButton: React.FC<ContainerProps> = ({label}) => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(true)
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