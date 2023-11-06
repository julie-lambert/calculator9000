function EqualButton(props) {
    const handleClick = () => {
      props.handleClick("=");
    }
  
    return (
      <button className="equal" onClick={handleClick}>=</button>
    );
  }
export default EqualButton