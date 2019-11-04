import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import { Typography } from '@material-ui/core'


class PageTwo extends Component {
    state = {
        visible: false,
    }
    allowNextPage = () => {
        this.props.dispatch({ type: "ALLOW_NEXT", payload: this.props.stepReducer })
    }
    // Add this to let people press back button on browser
    componentDidMount() {
        this.props.dispatch({ type: "SET", payload: 2 })
        // Timer for helper text
        this.fader = setTimeout(() => this.setState({ visible: true }), 3000)
    }
    render() {
        return (
            <>
                <Typography variant="h4">How well do you understand the content?</Typography>    

                <InputRange
                    maxValue={10}
                    minValue={0}
                    value={this.props.feedbackReducer.understanding}
                    onChange={understanding => this.props.dispatch({ type: "ADD", payload: { property: "understanding", value: understanding } })}
                    onChangeStart={this.allowNextPage} />

                {/* If they haven't moved the slider, and some seconds pass then... */}
                {!this.props.allowNextReducer[this.props.stepReducer] &&
                    <div className={this.state.visible ? 'fadeIn' : 'fadeOut'}>Still need your input to proceed</div>}
            </>

        )
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(PageTwo);