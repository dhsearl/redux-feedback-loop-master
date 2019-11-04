import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Themes
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { teal, cyan, red } from '@material-ui/core/colors';


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
    overrides: {
        MuiStepper: {
            root: {
                background: "#1a1a1a",
            }
        },
        MuiStepLabel: {
            label: {
                color: "white",
                '&$active': {
                    color: "pink"
                },
                '&$completed': {
                    color: "#6F7C80",
                },
            },
        },
        MuiTypography: {
            h2: {
                color: teal
            }
        },
    }
}
);


// Set initial values for sliders and text box
const initialState = {
    feeling: 5,
    understanding: 5,
    support: 5,
    comments: ''
}
// Build object of feedback for sending to database
const feedbackReducer = (state = initialState, action) => {
    if (action.type === "ADD") {
        let property = action.payload.property;
        return { ...state, [property]: action.payload.value }
    } else if (action.type === "CLEAR") {
        return initialState
    }
    return state
}
// Next page action from Footer Buttons
const stepReducer = (state = 0, action) => {
    if (action.type === "NEXT") {
        return state + 1
    } else if (action.type === "BACK") {
        return state - 1
    } else if (action.type === "RESET") {
        return 0
    } else if (action.type === "SET") {
        return action.payload
    }
    return state
}

// The array indexes match the page numbers from 0-home to 6-Success
const allowNextPageArray = [true, false, false, false, true, true, true]
const allowNextReducer = (state = allowNextPageArray, action) => {
    if (action.type === "ALLOW_NEXT") {
        return state.map((page, i) => {
            if (action.payload === i) page = true;
            return page
        })
    }
    else if (action.type === "CLEAR") {
        return allowNextPageArray
    }
    return state
}



const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
        stepReducer,
        allowNextReducer,
    })
)
ReactDOM.render(<Provider store={storeInstance}><MuiThemeProvider theme={theme}><App /></MuiThemeProvider></Provider>, document.getElementById('root'));

