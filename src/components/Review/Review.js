import React, { Component } from 'react';
import { connect } from 'react-redux'
import Score from '../Score/Score'

import { Typography, Grid, Box, Container } from '@material-ui/core'

class Review extends Component {
    // Add this to let people press back button on browser
    componentDidMount() {
        this.props.dispatch({ type: "SET", payload: 5 })
    }
    render() {
        return (
            <>
                <Typography variant="h4">Review Answers</Typography>
                {/* <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                > */}
                <Container maxWidth="xs">
                <Box px="2rem">
                    <Grid container 
                    direction="column"
                    alignItems="flex-end">
                        
                    <Box py="2rem">I'm feeling like a   <Score number={this.props.feedbackReducer.feeling} /></Box>
                    <Box pb="2rem">My understanding is a   <Score number={this.props.feedbackReducer.understanding} /></Box>
                    <Box pb="2rem">The level of support I feel is a   <Score number={this.props.feedbackReducer.support} /></Box>

                    {this.props.feedbackReducer.comments.length > 0
                        && <Box>Additionally:  {this.props.feedbackReducer.comments}</Box>
                    }
                    
                    </Grid>
                    </Box>
                    </Container>
                {/* </Grid> */}
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(Review);