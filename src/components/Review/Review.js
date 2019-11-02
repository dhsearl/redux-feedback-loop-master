import React, { Component } from 'react';
import { connect } from 'react-redux'
import Score from '../Score/Score'
import axios from 'axios'
import { Button, Typography, Grid, Box} from '@material-ui/core'

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
            <Grid style={{width:"65%"}}
            container
            direction="column"
            alignItems="flex-end"
            > 
                <Box py="2rem">I'm feeling like a  <Score number={this.props.feedbackReducer.feeling} /></Box>
                <Box pb="2rem">My understanding is a  <Score number={this.props.feedbackReducer.understanding} /></Box>
                <Box pb="2rem">The level of support I feel is a  <Score number={this.props.feedbackReducer.support} /></Box>

                {this.props.feedbackReducer.comments.length > 0 
                    && <Box>Additionally:  {this.props.feedbackReducer.comments}</Box>
                }

                
            </Grid>
            <Button variant="outlined" color="default" onClick={this.handleClick}>Submit</Button></>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(Review);