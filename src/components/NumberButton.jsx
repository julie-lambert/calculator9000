function NumberButton(props){
    
    const nums = [0,1,2,3,4,5,6,7,8,9];
    const listNums = nums.map((num,i) =>(
        <button key={i}>{num}</button>
    ));
    return(
       <div>
        {listNums}
       </div>
    )
}
export default NumberButton