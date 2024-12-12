import "./Greatings.css"
function Greatings (props){

    const { text, children } = props; // destructuring


  const displayText = children === undefined ? text : children;


    return (
        <h1 className="Greatings">{displayText}</h1>
    )
}

export default Greatings;