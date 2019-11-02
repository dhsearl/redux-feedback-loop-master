import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import { Button } from '@material-ui/core'

class PageThree extends Component {
        state={
                allowNext: false,
            }
                handleClick = () => {
                        if(this.state.allowNext) this.props.history.push("/PageFour")
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
                                <h1>How well are you being supported?</h1>
                                <form>
                                <InputRange
                                    maxValue={10}
                                    minValue={0}
                                    value={this.props.feedbackReducer.support}
                                    onChange={support => this.props.dispatch({type:"ADD",payload:{ property:"support", value:support}})}
                                    onChangeStart={this.allowNextPage} />
                                <Button color="primary" onClick={this.handleClick}>Next</Button>
                                </form>
                                </>
               
                        )}}

const mapReduxStateToProps = (reduxState) => {
        return reduxState
}
export default connect(mapReduxStateToProps)(PageThree);