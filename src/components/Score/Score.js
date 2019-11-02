import React, { Component } from 'react';
import Button from '@material-ui/core/Button'

class Score extends Component {
    // Added this incase I want to change the range
    state = {
        scoreColor: [],
    }

    // 70% and up will be green
    // 50% to 70% will be yellow
    // Below 50% will be red
    determineColor = (number) => {
        if (number >= 7 ) return ["green","white"]
        else if (number >= 5) return ["yellow","blue"]
        else return ["red","white"]
    }

    // Use props to determine scoreColor
    componentDidMount() {
        this.setState({
            scoreColor: this.determineColor(this.props.number)
        })
    }

    render() {
        return (
            <Button
                style={{ backgroundColor:this.state.scoreColor[0], 
                        color: this.state.scoreColor[1] }}
                variant="contained">{this.props.number}/10
            </Button>
        )
    }
}


export default (Score);