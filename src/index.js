import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo';
import createStore from './createStore';

let store = createStore(manageTodo);

export function render(){
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
};

// BORED OF THIS LAB SO IM STOPPING

store.dispatch({type: '@@INIT'});
