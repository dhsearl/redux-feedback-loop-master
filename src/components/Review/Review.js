import React, { Component } from 'react';
import { connect } from 'react-redux'
import Score from '../Score/Score'
import axios from 'axios'

class Review extends Component {

        
        handleClick = (event) => {
                event.preventDefault();
                this.sendToDatabase();
        }

        sendToDatabase = () => {
                axios.post('/feedback',this.props.feedbackReducer)
                .then(()=>{
                        this.props.dispatch({type:"CLEAR"})
                        this.props.history.push("/Success");
                })
                .catch((error)=>{
                        alert("Error sending feedback to database");
                        console.log("POST error was",error);
                })
        }

        render() {
                return (
                        <>
                        <h1>Review Answers</h1>
                        <p>I'm feeling like a <Score number={this.props.feedbackReducer.feeling} /></p>
                        <p>My understanding is a <Score number={this.props.feedbackReducer.feeling}/></p>

                        <p>The level of support I feel is a <Score number={this.props.feedbackReducer.feeling}/></p>
                        {this.props.feedbackReducer.comments.length >0 && <p>Additionally:  {this.props.feedbackReducer.comments}</p>}

                        <button onClick={this.handleClick}>Submit</button>
                        </>
       
                )}}

const mapReduxStateToProps = (reduxState) => {
        return reduxState
}
export default connect(mapReduxStateToProps)(Review);