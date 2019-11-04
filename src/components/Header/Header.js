import React, { Component } from 'react';
import { Step, Stepper, StepLabel, Box, AppBar, Container, Typography } from '@material-ui/core';
import { connect } from 'react-redux'

class Header extends Component {

    render() {

        const steps = ['Feelings', 'Understanding', 'Support', 'Comments', 'Review'];

        return (
            <AppBar position="relative" color="primary">
                <Box py={'1rem'}><Typography variant="h4">Prime Feedback</Typography></Box>


                {/* Show Stepper only if we're off the main page */}
                {this.props.stepReducer > 0 && this.props.stepReducer < 6 &&
                    
                        <Container maxWidth="md">
                            <Box pb={'1rem'} display={{ xs: 'none', sm: 'block' }}>
                                <Stepper
                                    activeStep={this.props.stepReducer - 1}
                                >
                                    {steps.map((label) => {
                                        return (
                                            <Step key={label} >
                                                <StepLabel >{label}</StepLabel>
                                            </Step>
                                        );
                                    })}
                                </Stepper>
                            </Box>
                            </Container>
               }
            </AppBar>


        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}


export default connect(mapReduxStateToProps)(Header);