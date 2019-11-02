import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import {Button} from '@material-ui/core'


class PageOne extends Component {
    state={
        // Require some user input before allowing next button
        allowNext: false,
    }
    allowNextPage = () =>{
        this.setState({
            allowNext: true,
        })
    }

    handleClick = () => {
            if(this.state.allowNext) this.props.history.push("/PageTwo")
            else alert("Input Needed")
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

                <Button color="primary" onClick={this.handleClick}>NEXT</Button>

                </>

        )
    }
}


const mapReduxStateToProps = (reduxState) => {
        return reduxState
}
export default connect(mapReduxStateToProps)(PageOne);