import { useState } from 'react';
import './Style.css';

interface ContainerProps {
    label: string;
    setInput: (input: string) => void;
    input: string;
}

const StandardButton: React.FC<ContainerProps> = ({ label, setInput, input }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        // Escapa el punto en la expresión regular
        const matches = input.match(/\./g);
        const count = matches ? matches.length : 0;

        setClicked(true);
        console.log(count);

        // Solo agrega el punto si no está ya presente
        if (!(label === '.' && count >= 1)) {
            setInput(input + label);
        }
        setTimeout(() => setClicked(false), 100);
    };

    return (
        <button
            className={clicked ? 'standardButton clicked' : 'standardButton'}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

export default StandardButton;
