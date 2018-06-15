import React,{Component} from 'react';
import "./Character.css"



const Character = props => {
    
    return(
    <span>
        <div className="btn">
            <img width='100px' height='100px' src={props.image}/>
        </div>
    </span>
    )
}

export default Character;