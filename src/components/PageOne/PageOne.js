import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'



class PageOne extends Component {
    allowNextPage = () =>{
        this.props.dispatch({type:"ALLOW_NEXT", payload: this.props.stepReducer})
    }
    // Add this to let people press back button on browser
    componentDidMount(){
        this.props.dispatch({type:"SET", payload:1})
    }
    render() {
        return (
                <>
                <h1>How are you feeling</h1>

                <InputRange
                    maxValue={10}
                    minValue={0}
                    value={this.props.feedbackReducer.feeling}
                    onChange={feeling => this.props.dispatch({type:"ADD",payload:{property:"feeling",value:feeling}})}
                    onChangeStart={this.allowNextPage} />
                </>

        )
    }
}


const mapReduxStateToProps = (reduxState) => {
        return reduxState
}
export default connect(mapReduxStateToProps)(PageOne);