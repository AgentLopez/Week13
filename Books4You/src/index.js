import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'

import { Provider } from 'react-redux'
import Template from './Components/Template'
import Login from './Components/Login';
import Register from './Components/Register';
import AddBook from './Components/AddBook';
import EditBook from './Components/EditBook';
import authReducer from './store/auth'
import cartReducer from './store/cart'
import favReducer from './store/fav'
import CatFacts from './Components/CatFacts';
import thunk from 'redux-thunk'
import catReducer from './store/cat'
import MyBooks from './Components/MyBooks';
import Profile from './Components/Profile';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  authR: authReducer,
  cartR: cartReducer,
  favR: favReducer,
  catR: catReducer
})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store}>

    <BrowserRouter>
      <Template>
        <Switch>
          <Route path = '/cat' component = {CatFacts} />
          <Route path = '/login' component = {Login} />
          <Route path = '/register' component = {Register} />
          <Route path = '/my-books' component = {MyBooks} />
          <Route exact path = '/' component = {App} />
          <Route path = '/profile' component = {Profile} />
          <Route path = '/Add-Book' component = {AddBook} />
          <Route path = '/EditBook/:BookId' component = {EditBook} />
        </Switch>
      </Template>
    </BrowserRouter>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
