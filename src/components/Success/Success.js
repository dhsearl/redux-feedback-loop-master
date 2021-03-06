import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


class Success extends Component {
    // Add this to let people press back button on browser
    componentDidMount() {
        this.props.dispatch({ type: "SET", payload: 6 })
    }
    render() {
        return (
            <>
                <Typography variant="h4">Feedback Submitted</Typography>
                <br />
                <ThumbUpIcon fontSize="large" />
                <br />
            </>
        )
    }
}

export default connect()(Success);