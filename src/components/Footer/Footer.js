import React, { Component } from 'react';
import { Button, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import axios from 'axios'

// The Footer contains all nav controls
// Next, Back and Submit buttons change Header behavior and main views
class Footer extends Component {

    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.props.dispatch({ type: "NEXT" })
        this.getPage(this.props.stepReducer + 1)
    };

    handleBack = () => {
        this.props.dispatch({ type: "BACK" })
        this.getPage(this.props.stepReducer - 1)
    };

    handleSubmit = () => {
        // POST feedback, reset page values, goto success page
        axios.post('/feedback', this.props.feedbackReducer)
            .then(() => {
                this.props.dispatch({ type: "CLEAR" })
                this.props.dispatch({ type: "NEXT" })
                this.getPage(6)
            })
            .catch((error) => {
                alert("Error sending feedback to database");
                console.log("POST error was", error);
            })
    }

    // Footer controls the page view and holds all the buttons
    getPage = (step) => {
        switch (step) {
            case 0:
                this.props.dispatch({ type: "RESET" })
                this.props.history.push("/");
                break;
            case 1:
                this.props.history.push("/PageOne");
                break;
            case 2:
                this.props.history.push("/PageTwo");
                break;
            case 3:
                this.props.history.push("/PageThree");
                break;
            case 4:
                this.props.history.push("/PageFour");
                break;
            case 5:
                this.props.history.push("/Review");
                break;
            case 6:
                this.props.history.push("/Success");
                break;
            case 9:
                this.props.history.push("/Admin");
                break;
            default:
                return 'Unknown step';
        }
    }

    render() {
        const activeStep = this.props.stepReducer;
        return (
            <>
                {/* Conditonally Render navigation buttons */}
                <div>
                {/* Only show back once the survey has started. Only allow it after you've gone forward once. */}
                {activeStep > 1 && activeStep < 6 &&
                    <Button
                        disabled={activeStep === 1}
                        onClick={this.handleBack}>
                        Back
                    </Button>}

                {/* First have 'Yes' be the next button, 
                then show Next or Review for most pages */}
                {activeStep === 0 &&
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}>
                        Yes
                    </Button>}
                {activeStep > 0 && activeStep < 5 &&
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={activeStep < 5 && !this.props.allowNextReducer[activeStep]}
                        onClick={this.handleNext}>
                        {activeStep === 4 ? 'Review' : 'Next'}
                    </Button>}

                {/* Just show submit on page 5 */}
                {activeStep === 5 &&
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleSubmit}>
                        Submit
                    </Button>}
                </div>
                {/* Just show back to home on page 6 */}
                {activeStep === 6 &&
                <div>
                    
                    <Button 
                    color="primary" 
                    variant="outlined" 
                    onClick={() => this.getPage(0)}
                    >
                        Click to write new feedback
                    </Button>
                </div>
                }
                {/* Admin page Go To Survey */}
                {activeStep === 9 &&
                <div>
                    <Button 
                    color="primary" 
                    variant="outlined" 
                    onClick={() => this.getPage(0)}
                    >
                        Go To Survey
                    </Button>
                </div>
                }
            </>
        );
    }
}
const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(Footer);