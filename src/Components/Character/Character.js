import React,{Component} from 'react';
import "./Character.css"



const Character = props => {
    
    return(<span>
        <div onClick={() => props.handleMatch(props.id)} className="btn">
            <img width='100px' src={props.image}/>
        </div>
    </span>
    )
}

export default Character;