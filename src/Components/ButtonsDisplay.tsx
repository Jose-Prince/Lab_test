import AcButton from "./AcButton"
import LargeButton from "./LargeButton"
import StandardButton from "./StandardButton"

interface ContainerProps {
    setInput: (input: string) => void
    input: string
    setOperation: (operation: string) => void
    operation: string
    result : string
    setResult: (result: string) => void
}

const ButtonsDisplay: React.FC<ContainerProps> = ({setInput, input, setOperation, operation, result, setResult}) => {
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
                    <StandardButton input={input} label="7" setInput={setInput} setOperation={setOperation} operation={operation} result={result} setResult={setResult}/>
                    <StandardButton input={input} label="8" setInput={setInput} setOperation={setOperation} operation={operation} result={result} setResult={setResult}/>
                    <StandardButton input={input} label="9" setInput={setInput} setOperation={setOperation} operation={operation} result={result} setResult={setResult}/>
                    <StandardButton input={input} label="4" setInput={setInput} setOperation={setOperation} operation={operation} result={result} setResult={setResult}/>
                    <StandardButton input={input} label="5" setInput={setInput} setOperation={setOperation} operation={operation} result={result} setResult={setResult}/>
                    <StandardButton input={input} label="6" setInput={setInput} setOperation={setOperation} operation={operation} result={result} setResult={setResult}/>
                    <StandardButton input={input} label="1" setInput={setInput} setOperation={setOperation} operation={operation} result={result} setResult={setResult}/>
                    <StandardButton input={input} label="2" setInput={setInput} setOperation={setOperation} operation={operation} result={result} setResult={setResult}/>
                    <StandardButton input={input} label="3" setInput={setInput} setOperation={setOperation} operation={operation} result={result} setResult={setResult}/>
                </div>
                <div style={{
                    display: 'flex',
                }}>
                    <LargeButton label="0" input={input} setInput={setInput} setOperation={setOperation} operation={operation} result={result} setResult={setResult}/>
                    <StandardButton input={input} label="." setInput={setInput} setOperation={setOperation} operation={operation} result={result} setResult={setResult}/>
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px'
            }}>
                <AcButton label="AC" setInput={setInput} setOperation={setOperation} setResult={setResult}/>
                <div className="operatorsDisplay">
                    <StandardButton label="+" input={input} setInput={setInput} setOperation={setOperation} operation={operation} result={result} setResult={setResult}/>
                    <StandardButton label="-" input={input} setInput={setInput} setOperation={setOperation} operation={operation} result={result} setResult={setResult}/>
                    <StandardButton label="X" input={input} setInput={setInput} setOperation={setOperation} operation={operation} result={result} setResult={setResult}/>
                    <StandardButton label="/" input={input} setInput={setInput} setOperation={setOperation} operation={operation} result={result} setResult={setResult}/>
                    <StandardButton label="%" input={input} setInput={setInput} setOperation={setOperation} operation={operation} result={result} setResult={setResult}/>
                    <StandardButton label="=" input={input} setInput={setInput} setOperation={setOperation} operation={operation} result={result} setResult={setResult}/>
                </div>
            </div>
        </div>
    )
}

export default ButtonsDisplay