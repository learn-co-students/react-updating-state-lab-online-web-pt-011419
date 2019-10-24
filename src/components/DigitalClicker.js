// Code DigitalClicker Component Here
import React, {Component} from 'react';

class DigitalClicker extends Component {
    constructor(){
        super()
        this.state = {timesClicked: 0,}
    }

    timesClickedHandler = () => {
        this.setState(previousState => ({
            timesClicked: previousState.timesClicked + 1
        }))
    }

    render(){
        return(
            <button onClick={this.timesClickedHandler}>{this.state.timesClicked}</button>
        )
    }

}

export default DigitalClicker