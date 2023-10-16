function BeautifulScreen(props){
    return(
        <div className="screen">
            <input type="text" value= {props.operation} readOnly/>
            <input type="text" value={props.result} readOnly/>
        </div>
    )
}

export default BeautifulScreen