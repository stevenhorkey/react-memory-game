import React,{Component} from 'react';
import "./Navbar.css"


class Navbar extends Component {

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">Clicky Game</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <span className="mx-auto">Click on an image to begin!</span>
                        <span className="float-right">Score: 0 | Top Score: 0</span>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;