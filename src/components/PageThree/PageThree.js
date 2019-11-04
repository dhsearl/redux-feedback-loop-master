import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'


class PageThree extends Component {
    state = {
        visible: false,
    }
    allowNextPage = () => {
        this.props.dispatch({ type: "ALLOW_NEXT", payload: this.props.stepReducer })
    }
    // Add this to let people press back button on browser
    componentDidMount() {
        this.props.dispatch({ type: "SET", payload: 3 })
        // Timer for helper text
        this.fader = setTimeout(() => this.setState({ visible: true }), 3000)
    }
    render() {
        return (
            <>
                <h1>How well are you being supported?</h1>
                <Box className="sliderWidth">
                <InputRange
                    maxValue={10}
                    minValue={0}
                    value={this.props.feedbackReducer.support}
                    onChange={support => this.props.dispatch({ type: "ADD", payload: { property: "support", value: support } })}
                    onChangeStart={this.allowNextPage} />
                </Box>

                {/* If they haven't moved the slider, and some seconds pass then... */}
                {!this.props.allowNextReducer[this.props.stepReducer] &&
                    <div className={this.state.visible ? 'fadeIn' : 'fadeOut'}>I thought we went over this...</div>}
            </>

        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(PageThree);