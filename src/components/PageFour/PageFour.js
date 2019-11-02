import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Button, TextField, Grid, Typography} from '@material-ui/core';



class PageFour extends Component {
        

        handleChange=(event) => {
                this.props.dispatch({type:"ADD", payload:{property:"comments", value: event.target.value}});
        }

        handleClick = () => {

                this.props.history.push("/Review");
        }


        render() {
                
                return (
                        <>
                        
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                        <Typography variant="h4">Additonal Comments</Typography>

                        <TextField
                        id="filled-textarea"
                        label="Optional"
                        placeholder=""
                        multiline
                        className="textField"
                        value={this.props.feedbackReducer.comments}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="filled"
                        />
                        
                        <Button color="primary" onClick={this.handleClick}>Next</Button>
                        </Grid>
                        </>
       
                )}}

const mapReduxStateToProps = (reduxState) => {
        return reduxState
}
// export default connect(mapReduxStateToProps)(withStyles(styles)(PageFour));
export default connect(mapReduxStateToProps)(PageFour);
