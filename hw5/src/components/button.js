

const CalButton = ( { text, index, onClick } ) => {
    
    return(
        <button key={index} value={text} className="button" onClick={onClick}>{text}</button> 
    );
}

export default CalButton