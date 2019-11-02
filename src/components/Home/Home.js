import React, { Component } from 'react';
import { connect } from 'react-redux'


class Home extends Component {

        handleChangeFor=(event, el) => {
                this.setState({
                        [el]: event.target.value,
                });
        }

        handleClick = (event) => {
                event.preventDefault();
                this.props.history.push("/PageOne");
        }


        render() {
                return (
                        <>
                        <h1>Want to give feedback? </h1>
                        <button onClick={this.handleClick}>Yes</button>
                        </>
       
                )}}

const mapReduxStateToProps = (reduxState) => {
        return reduxState
}
export default connect(mapReduxStateToProps)(Home);