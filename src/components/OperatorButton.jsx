function OperatorButton(props){
    const operators = ["+","-","*","/"];
    const listOp = operators.map((operator,i)=>(
        <button key={i}>{operator}</button>
    ));

    return(
        <div>
            {listOp}
        </div>
    )
}

export default OperatorButton