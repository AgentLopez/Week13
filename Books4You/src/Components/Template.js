import { Component } from "react";
import Cart from "./Cart";
import Favorite from "./Favorite";
import Header from "./Header";


class Template extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="twoColumn">
                    <div className="mainColumn">{this.props.children}</div>
                    <div className="sideColumn"><Cart /><Favorite /></div>
                </div>
                
      
            </div>
    
        )
    }
}

export default Template