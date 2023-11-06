function OperatorButton(props){
    const operators = ["+","-","*","/"];
    const listOp = operators.map((operator,i)=>(
        <button className="operator" key={i} onClick={()=>props.handleClick(operator)}>{operator}</button>
    ));

    return(
        <div className="operator-container">
            {listOp}
        </div>
    )
}

export default OperatorButton