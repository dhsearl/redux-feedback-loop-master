import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
// import './PageOne.css'

class PageOne extends Component {
    state={
        feeling: 5,
        allowNext: false,
    }
        handleClick = () => {
                if(this.state.allowNext) this.props.history.push("/PageTwo")
                else alert("Input Needed")
        }
        allowNextPage = () =>{
            this.setState({
                allowNext: true,
            })
        }

        render() {
                return (
                        <>
                      <pre>{JSON.stringify(this.props,null,2)}</pre>
                        <pre>{JSON.stringify(this.state,null,2)}</pre>
                        <h1>How are you feeling</h1>
                        <form>
                        <InputRange
                            maxValue={10}
                            minValue={0}
                            value={this.state.feeling}
                            onChange={feeling => this.setState({ feeling })}
                            onChangeStart={this.allowNextPage} />
                        <button onClick={this.handleClick}>Click for next</button>
                        </form>
                        </>
       
                )}}


const mapReduxStateToProps = (reduxState) => {
        return reduxState
}
export default connect(mapReduxStateToProps)(PageOne);