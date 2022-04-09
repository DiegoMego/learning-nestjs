import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './redux/store';
import { contexts } from './contexts/index';
import ability from './acl/ability';

export default function Wrapper() {
  return (
    <Provider store={store}>
      <contexts.ability.Provider value={ability}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </contexts.ability.Provider>
    </Provider>
  );
}
