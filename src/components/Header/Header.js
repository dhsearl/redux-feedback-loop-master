
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Step, Stepper, StepLabel, Box, AppBar, Container} from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'

const styles = theme => ({
    root: {
        width: '90%',
    },
    
});

function getSteps() {
    return ['Feelings', 'Understanding', 'Support', 'Comments', 'Review'];
}

class Header extends Component {

    render() {

        const steps = getSteps();

        return (
            <AppBar container position="relative" color="primary">
                <Box py={'1rem'}><Typography variant="h4">Prime Feedback</Typography></Box>
                

                {/* Show Stepper only if we're off the main page */}
                {this.props.stepReducer !== 0 && this.props.stepReducer !==6 &&  
                <Container px={0} style={{width:'100vp', maxWidth:'1020px'}} >
                    <Box pb={'1rem'} display={{ xs: 'none', sm: 'block' }}>
                    <Stepper activeStep={this.props.stepReducer-1} >
                        {steps.map((label, index) => {
                            const props = {};
                            const labelProps = {};
                            return (
                                <Step key={label} {...labelProps} {...props}>
                                    <StepLabel >{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    </Box>
                </Container>}
            </AppBar>


        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}


export default connect(mapReduxStateToProps)(withStyles(styles)(Header));