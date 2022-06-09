import React from 'react';
import './App.css';
import './riddles';

function Data(props){
    const [show, setShow]= React.useState(false)
    
    function toggleShown(){
        return(
        setShow(prevShow => !prevShow)
        )}
    return(
        <section>
        <h3 className="riddles">
        {props.riddle.Question}
        </h3>
        <button className="button" 
        onClick ={toggleShown}>
            {show? "Hide":"Show"}
            </button>
        {show && <p className="answer">
        {props.riddle.Answer}
        </p>}   
        </section>
    )
}
export default Data;