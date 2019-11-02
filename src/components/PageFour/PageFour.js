import React, { Component } from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import './PageFour.css'


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
                        <h1>Hello page four</h1>
                        
                        <pre>{JSON.stringify(this.props,null,2)}</pre>
                        
                        <TextField
                        id="filled-textarea"
                        label="Additional Comments"
                        placeholder="Optional"
                        multiline
                        className="textField"
                        value={this.props.feedbackReducer.comments}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="filled"
                        />
                        
                        <button onClick={this.handleClick}>Click to review</button>
                        </>
       
                )}}

const mapReduxStateToProps = (reduxState) => {
        return reduxState
}
// export default connect(mapReduxStateToProps)(withStyles(styles)(PageFour));
export default connect(mapReduxStateToProps)(PageFour);
