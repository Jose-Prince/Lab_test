import ButtonsDisplay from './ButtonsDisplay'
import ScreenDisplay from './ScreenDisplay'
import './Style.css'

const Calculator: React.FC = () => {
    return (
        <div className="calculator">
            <ScreenDisplay />
            <ButtonsDisplay />
        </div>
    )
}

export default Calculator