import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';


// Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Themes
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { teal, cyan, red, purple } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: {
        main: cyan[900]
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  spacing: 
      8,
});
console.log(theme);

const initialState = {
    feeling: 5,
    understanding: 5,
    support: 5,
    comments:''
}

const feedbackReducer = ( state=initialState , action ) => {
    if(action.type==="ADD"){
        let property = action.payload.property;
        return { ...state, [property]: action.payload.value}
    } else if (action.type ==="CLEAR"){
        return initialState
    }
    return state;
}

const stepReducer = ( state=0, action ) => {
    if(action.type==="NEXT") {
        return state +1
    } else if(action.type==="BACK"){
        return state -1
    } else if(action.type==="RESET"){
        return 0
    }
    return state
}


const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
        stepReducer
    })
)
ReactDOM.render(<Provider store={storeInstance}><MuiThemeProvider theme={theme}><App /></MuiThemeProvider></Provider>, document.getElementById('root'));

