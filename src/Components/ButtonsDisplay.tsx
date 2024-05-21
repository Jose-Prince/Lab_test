import LargeButton from "./LargeButton"
import StandardButton from "./StandardButton"

interface ContainerProps {
    setInput: (input: string) => void
    input: string
}

const ButtonsDisplay: React.FC<ContainerProps> = ({setInput, input}) => {
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
                    <StandardButton input={input} label="7" setInput={setInput}/>
                    <StandardButton input={input} label="8" setInput={setInput}/>
                    <StandardButton input={input} label="9" setInput={setInput}/>
                    <StandardButton input={input} label="4" setInput={setInput}/>
                    <StandardButton input={input} label="5" setInput={setInput}/>
                    <StandardButton input={input} label="6" setInput={setInput}/>
                    <StandardButton input={input} label="1" setInput={setInput}/>
                    <StandardButton input={input} label="2" setInput={setInput}/>
                    <StandardButton input={input} label="3" setInput={setInput}/>
                </div>
                <div style={{
                    display: 'flex',
                    paddingLeft: '10px'
                }}>
                    <LargeButton label="="/>
                    <StandardButton input={input} label="." setInput={setInput}/>
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