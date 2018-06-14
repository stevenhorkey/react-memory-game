import React,{Component} from 'react';
import "./Characters.css";

import Character from "../Character/Character"
import characters from "../../charArray"

class Characters extends Component {

    state = {
        characters: characters,
        score: 0,
        clickedArr: []
    }

    shuffleCharacters = () => {
        for (let i = characters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [characters[i], characters[j]] = [characters[j], characters[i]];
        }
        // return characters;
        this.setState({characters: this.characters})
    }

    handleMatch = id => {
        for (var character in characters){
            if (this.state.clickedArr.includes(character.id)){
                alert('fucked up')
            } else {
                this.state.clickedArr.push(id);
            }
        }
        this.shuffleCharacters()
    }

    render() {
        
        return(
            <div className="">
                {this.state.characters.map(character => (
                    <Character
                        id={character.id}
                        key={character.id}
                        image={character.image}
                        handleMatch={this.handleMatch}
                    />
                ))}
            </div>
        )
    }
}

export default Characters;