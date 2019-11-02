import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, ButtonGroup, Typography } from '@material-ui/core'


class Success extends Component {

    handleChangeFor = (event, el) => {
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
                <Typography variant="h2">Feedback Submitted</Typography>
                <ButtonGroup>
                    <Button variant="contained" color="primary" onClick={() => this.handleClick('/')}>Click to go back to start</Button>
                    <Button color="secondary" onClick={() => this.handleClick('/PageOne')}>Click to write new feedback</Button>
                </ButtonGroup>
            </>

        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(Success);