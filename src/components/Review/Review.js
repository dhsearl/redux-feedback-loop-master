import React, { Component } from 'react';
import { connect } from 'react-redux'


class Review extends Component {

        handleChangeFor=(event, el) => {
                this.setState({
                        [el]: event.target.value,
                });
        }

        handleClick = (event) => {
                event.preventDefault();
                this.props.history.push("/Success");
        }


        render() {
                return (
                        <>
                        <h1>Review Answers</h1>
                        <button onClick={this.handleClick}>Submit</button>
                        </>
       
                )}}

const mapReduxStateToProps = (reduxState) => {
        return reduxState
}
export default connect(mapReduxStateToProps)(Review);