import React, { Component } from 'react';
import ArrowKeysReact from 'arrow-keys-react';
import { FaWalking } from "react-icons/fa";
import './Path.css'

class Path extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leftX: 50,
            topY: 50,
            moveBy: 2
        }
        this.focusOn = React.createRef();
    }

    moveBack = () => {
        this.setState({
            leftX: this.state.leftX - this.state.moveBy
        });
    }

    moveForward = () => {
        this.setState({
            leftX: this.state.leftX + this.state.moveBy
        });
    }

    moveUp = () => {
        this.setState({
            topY: this.state.topY - this.state.moveBy
        });
    }

    moveDown = () => {
        this.setState({
            topY: this.state.topY + this.state.moveBy
        });
    }

    componentDidMount() {
        this.focusOn.current.focus();
    }    

    render() {

        ArrowKeysReact.config({
            left: this.moveBack,
            right: this.moveForward,
            up: this.moveUp,
            down: this.moveDown
        });

        return (
            <div className="icon" 
                {...ArrowKeysReact.events} tabIndex="1" 
                style={{left:this.state.leftX, top:this.state.topY}} 
                ref={this.focusOn}
            >
                <FaWalking/>
            </div>
        );
    }
}

export default Path;