import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'


class PageTwo extends Component {
    allowNextPage = () =>{
        this.props.dispatch({type:"ALLOW_NEXT", payload: this.props.stepReducer})
    }
    render() {
        return (
            <>
            <h1>How well do you understand content?</h1>
            
            <InputRange
                    maxValue={10}
                    minValue={0}
                    value={this.props.feedbackReducer.understanding}
                    onChange={understanding => this.props.dispatch({type:"ADD",payload:{property:"understanding",value:understanding}})}
                    onChangeStart={this.allowNextPage} /> 
            </>

        )
    }
}
        

const mapReduxStateToProps = (reduxState) => {
        return reduxState
}
export default connect(mapReduxStateToProps)(PageTwo);