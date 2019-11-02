import React, { Component } from 'react';
import { connect } from 'react-redux'
import Score from '../Score/Score'
import axios from 'axios'
import { Button, Typography, Grid} from '@material-ui/core'

class Review extends Component {


    handleClick = () => {
        this.sendToDatabase();
    }

    sendToDatabase = () => {
        axios.post('/feedback', this.props.feedbackReducer)
            .then(() => {
                this.props.dispatch({ type: "CLEAR" })
                this.props.history.push("/Success");
            })
            .catch((error) => {
                alert("Error sending feedback to database");
                console.log("POST error was", error);
            })
    }

    render() {
        return (
            <>
            <Typography variant="h3">Review Answers</Typography>
            <Grid style={{width:"50%",marginRight:"400px"}}
            container
            direction="column"
            alignItems="flex-end"
            > 
                <Grid pb={6}>I'm feeling like a  <Score number={this.props.feedbackReducer.feeling} /></Grid>
                <Grid pb={6}>My understanding is a  <Score number={this.props.feedbackReducer.understanding} /></Grid>
                <Grid pb={6}>The level of support I feel is a  <Score number={this.props.feedbackReducer.support} /></Grid>

                {this.props.feedbackReducer.comments.length > 0 
                    && <Grid>Additionally:  {this.props.feedbackReducer.comments}</Grid>
                }

                
            </Grid>
            <Button onClick={this.handleClick}>Submit</Button></>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(Review);