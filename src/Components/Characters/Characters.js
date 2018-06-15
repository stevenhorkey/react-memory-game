import React,{Component} from 'react';
import "./Characters.css";

import Character from "../Character/Character"
import characters from "../../charArray"

class Characters extends Component {

    state = {
        characters: characters,
        topScore: 0,
        score: 0,
        clickedArr: []
    }

    shuffleCharacters = () => {
        for (let i = characters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [characters[i], characters[j]] = [characters[j], characters[i]];
        }
        // return characters;
        this.setState({characters: characters})
    }

    handleMatch = id => {
        console.log(this.state.clickedArr);
        if (this.state.clickedArr.includes(id)){
            alert('fucked up')
            this.setState({
                score:0,
                clickedArr: []
            })
        } else {
            this.setState({score: this.state.score + 1});
            this.state.clickedArr.push(id);        
        }
        this.shuffleCharacters()
    }

    setTopScore = () => {
        if(this.state.score > this.state.topScore){
            this.setState({topScore: this.state.score})
        }
    }

    render() {

        return(
            <div className="">
                <div className='row'>
                    <h3 className="mx-auto my-5">
                        Score: {this.state.score} | Top Score: 0
                    </h3>
                </div>

                <div className='row'>
                    {this.state.characters.map(character => {
                        return (
                            <span 
                                onClick={(event) => this.handleMatch(character.id)} 
                                id={character.id}
                                key={character.id}
                            >
                                <Character
                                    image={character.image}
                                />
                            </span>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Characters;