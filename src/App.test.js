import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import store from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

test('render div element in App', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
