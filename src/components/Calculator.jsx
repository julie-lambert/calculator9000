import Title from './Title'
import NumberButton from './NumberButton'
import OperatorButton from './OperatorButton'
import EqualButton from './EqualButton'
import BeautifulScreen from './BeautifulScreen'

function Calculator(){
    return(
    <>
     <Title text="Calculator 9000"/>
     <BeautifulScreen/>
     <NumberButton/>
     <OperatorButton/>
     <EqualButton/>
    </>
    )
}

export default Calculator