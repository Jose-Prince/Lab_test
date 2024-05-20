import { useState } from 'react'
import './Style.css'

interface ContainerProps {
    label: string
}

const StandardButton: React.FC<ContainerProps> = ({label}) => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(true)
        setTimeout(() => setClicked(false), 200)
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