import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TextField, Grid, Typography } from '@material-ui/core';



class PageFour extends Component {
    // Link the text box to the comment property of the redux store's reducer
    handleChange = (event) => {
        this.props.dispatch({ type: "ADD", payload: { property: "comments", value: event.target.value } });
    }
    // Add this to let people press back button on browser
    componentDidMount() {
        this.props.dispatch({ type: "SET", payload: 4 })
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
                </Grid>
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(PageFour);
