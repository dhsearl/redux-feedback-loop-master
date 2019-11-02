import React, { Component } from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import './PageFour.css'



class PageFour extends Component {
        
        state={
                comments: ''
        }

        handleChangeFor=(event, el) => {
                this.setState({
                        [el]: event.target.value,
                });
        }

        handleClick = () => {

                this.props.history.push("/Review");
        }


        render() {
                
                return (
                        <>
                        <h1>Hello page four</h1>
                        
                        <TextField
                        id="filled-textarea"
                        label="Additional Comments"
                        placeholder="I want you to know..."
                        multiline
                        className={classes.textField}
                        value={this.state.comments}
                        onChange={()=>this.handleChangeFor('comments')}
                        margin="normal"
                        variant="filled"
                        />
                        
                        <button onClick={this.handleClick}>Click to review</button>
                        </>
       
                )}}

const mapReduxStateToProps = (reduxState) => {
        return reduxState
}
export default connect(mapReduxStateToProps)(PageFour);