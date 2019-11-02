import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';


// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


const initialState ={
    feeling: 5,
    understanding: 5,
    support: 5,
    comments:''
}

const feedbackReducer =( state=initialState , action)=>{
    if(action.type==="ADD"){
        let property = action.payload.property;
        return { ...state, [property]: action.payload.value}
    }
    return state;
}



const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    })
)
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

