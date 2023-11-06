function NumberButton(props){
    
    const nums = [0,1,2,3,4,5,6,7,8,9];
    const listNums = nums.map((num, i) =>(
        <button className= "num"  key={i}  onClick={()=>props.handleClick(num)}>{num}</button>
    ));
    return(
       <div>
        {listNums}
       </div>
    )
}
export default NumberButton