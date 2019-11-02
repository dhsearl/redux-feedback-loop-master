import React, { Component } from 'react';
import Button from '@material-ui/core/Button'

class Score extends Component {
    // Added this incase I want to change the range
    state = {
        RANGE_MAX: 10,
        scoreColor: '',
    }

    // 70% and up will be green
    // 50% to 70% will be yellow
    // Below 50% will be red
    determineColor = (number) => {
        if (number >= ((7 / this.state.RANGE_MAX) * 10)) return "green"
        else if (number >= ((5 / this.state.Range_MAX) * 10)) return "yellow"
        else return "red"
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
                style={{ backgroundColor: this.state.scoreColor, color: "white" }}
                variant="contained">{this.props.number}/10
            </Button>
        )
    }
}


export default (Score);