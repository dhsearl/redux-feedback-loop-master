import React, {Component} from 'react';
import { Box, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'


function getSteps() {
  return ['Feelings', 'Understanding', 'Support','Comments','Review'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
        return 'How do you really feel?';
    case 1:
        return 'What IS true knowledge anyways?';
    case 2:
        return 'Luke is proud of you.';
    case 3:
        return 'Last chance to get it out';
    case 4:
        return 'How does it look?';
    default:
      return 'Unknown step';
  }
}

class Footer extends Component {

  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.props.dispatch({type:"NEXT"})
  };

  handleBack = () => {
    this.props.dispatch({type:"BACK"})
  };

  handleReset = () => {
    this.props.dispatch({type:"RESET"})
  };

  render() {

    const steps = getSteps();
    const activeStep  = this.props.stepReducer;

    return (


        <>
          {this.props.stepReducer === steps.length ? (
            <div>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={this.handleReset}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <Box pb=".5rem" fontWeight="fontWeightLight">{getStepContent( Number(this.props.stepReducer) )}</Box>
              <div>
                <Button
                  disabled={this.props.stepReducer === 0}
                  onClick={this.handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}>
                  {Number(activeStep) === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </>
      
    );
  }
}
const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(Footer);