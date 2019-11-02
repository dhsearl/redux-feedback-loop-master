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
  spacing: 8,
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



const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    })
)
ReactDOM.render(<Provider store={storeInstance}><MuiThemeProvider theme={theme}><App /></MuiThemeProvider></Provider>, document.getElementById('root'));

