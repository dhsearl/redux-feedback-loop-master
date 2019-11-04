import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import { Typography } from '@material-ui/core'



class PageOne extends Component {
    state = {
        visible: false,
    }
    allowNextPage = () => {
        this.props.dispatch({ type: "ALLOW_NEXT", payload: this.props.stepReducer })
    }
    // Add this to let people press back button on browser
    componentDidMount() {
        this.props.dispatch({ type: "SET", payload: 1 })
        this.fader = setTimeout(() => this.setState({ visible: true }), 3000)
    }
    render() {
        return (
            <>
                {/* <h1>How are you feeling today?</h1> */}
                <Typography variant="h4">How are you feeling today?</Typography>    
                <InputRange
                    maxValue={10}
                    minValue={0}
                    value={this.props.feedbackReducer.feeling}
                    onChange={feeling => this.props.dispatch({ type: "ADD", payload: { property: "feeling", value: feeling } })}
                    onChangeStart={this.allowNextPage} />

                {/* If they haven't moved the slider, and some seconds pass then... */}
                {!this.props.allowNextReducer[this.props.stepReducer] &&
                    <div className={this.state.visible ? 'fadeIn' : 'fadeOut'}>You gotta move the slider</div>}
            </>

        )
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(PageOne);