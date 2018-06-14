import React,{Component} from 'react';
import "./Footer.css"

class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                <div className="container">
                    <span className="text-muted">Clicky Game</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" width='40px' alt="react logo"/>
                </div>
            </footer>
        )
    }
}

export default Footer;