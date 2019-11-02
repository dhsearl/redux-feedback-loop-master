import React, { Component } from 'react';
import { connect } from 'react-redux'


class Success extends Component {

        handleChangeFor=(event, el) => {
                this.setState({
                        [el]: event.target.value,
                });
        }

        handleClick = (page) => {
                // Let the user select
                this.props.history.push(page);
        }


        render() {
                return (
                        <>
                        <h1>Submitted Successfully</h1>
                        <button onClick={()=>this.handleClick('/')}>Click to go back to start</button>
                        <button onClick={()=>this.handleClick('/PageOne')}>Click to write new feedback</button>
                        </>
       
                )}}

const mapReduxStateToProps = (reduxState) => {
        return reduxState
}
export default connect(mapReduxStateToProps)(Success);