import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/pages/MainApp/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import store from './config/redux/store';
import axios from 'axios';

const theme = createMuiTheme({
  typography: {
    fontFamily: "Nunito Sans, Roboto, sans-serif"
  },
  shape: {
    borderRadius: 12
  },
  palette: {
    primary: {
      light: '#A8DBCC',
      main: '#A8DBCC',
      dark: '#A8DBCC',
      contrastText: '#fff',
    },
    secondary: {
      light: '#BFD6DE',
      main: '#BFD6DE',
      dark: '#ba000d',
      contrastText: '#000',
    },
    text: {
      disabled: '#000',
      primary: '#000',
    },
    action: {
      hover: '#A8DBCC',
      selected: '#A8DBCC'
    }
  },
});


axios.defaults.baseURL = 'http://localhost:8000';
// const store = createStore(indexReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider >
  </Provider>,

  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
