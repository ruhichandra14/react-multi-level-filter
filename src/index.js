import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';

import MainContainer from "./containers/main";
import rootReducer from "./reducers/root_reducer";


const store  = createStore(rootReducer);
console.log("intial state-- ",store.getState());

const FilterApp = () => {
  return (
        <MainContainer/>
  ) 
};

ReactDOM.render(
        <Provider store = {store}>
          <FilterApp />
        </Provider>
          , document.getElementById("app")
);