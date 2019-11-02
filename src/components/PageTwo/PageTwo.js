import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import {Button} from '@material-ui/core'

class PageTwo extends Component {
        state={
                allowNext: false,
            }
        handleClick = () => {
                if(this.state.allowNext) this.props.history.push("/PageThree")
                else alert("Input Needed")
        }
        allowNextPage = () =>{
                this.setState({
                allowNext: true,
                })
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
                        <Button color="primary" onClick={this.handleClick}>Next</Button>
                        
                        </>
        
                )
        }
}
        

const mapReduxStateToProps = (reduxState) => {
        return reduxState
}
export default connect(mapReduxStateToProps)(PageTwo);