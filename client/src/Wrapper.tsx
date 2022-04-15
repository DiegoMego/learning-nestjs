import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import { store } from './redux/store';
import { Contexts } from './contexts/index';
import ability from './acl/ability';

export default function Wrapper() {
  return (
    <Provider store={store}>
      <Contexts.Ability.Provider value={ability}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Contexts.Ability.Provider>
    </Provider>
  );
}
