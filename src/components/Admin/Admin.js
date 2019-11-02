import React, { Component } from 'react';
import { connect } from 'react-redux'


class Admin extends Component {

        handleChangeFor=(event, el) => {
                this.setState({
                        [el]: event.target.value,
                });
        }

        handleClick = (event) => {
                event.preventDefault();
                this.props.history.push("/PageFour");
        }


        render() {
                return (
                        <>
                        <h1>Admin Page</h1>     
                        <p>table goes here</p>
                        </>
       
                )}}

const mapReduxStateToProps = (reduxState) => {
        return reduxState
}
export default connect(mapReduxStateToProps)(Admin);