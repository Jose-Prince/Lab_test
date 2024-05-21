import StandardButton from "./StandardButton"

interface ContainerProps {}

const ButtonsDisplay: React.FC<ContainerProps> = () => {
    return (
        <div style={{
            display: 'flex',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '65%'
            }}>
                <div className="numbersDisplay">
                    <StandardButton label="7"/>
                    <StandardButton label="8"/>
                    <StandardButton label="9"/>
                    <StandardButton label="4"/>
                    <StandardButton label="5"/>
                    <StandardButton label="6"/>
                    <StandardButton label="1"/>
                    <StandardButton label="2"/>
                    <StandardButton label="3"/>
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                
            </div>
        </div>
    )
}

export default ButtonsDisplay