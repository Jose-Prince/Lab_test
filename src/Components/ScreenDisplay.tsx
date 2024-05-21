import { convertorInput } from '../logic/convertor'
import './Style.css'

interface ContainerProps {
    operation : string
    input: string
    result: string
}

const ScreenDisplay: React.FC<ContainerProps> = ({operation, input, result}) => {
    return (
        <div className="screen">
            <div className='inputDigits'>{operation}</div>
            <div className='inputDigits'>
                <p style={{
                    margin: '0',
                    marginTop: '15px',
                    fontSize: '50px'
                }}>
                    {convertorInput(input)}
                </p>
            </div>
            <div className='resultDigits'>
            <p style={{
                    margin: '0',
                    fontSize: '50px'
                }}>
                    {result}
                </p>
            </div>
        </div>
    )
}

export default ScreenDisplay