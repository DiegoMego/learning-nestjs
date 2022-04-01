import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { contexts } from './contexts/index';
import ability from './acl/ability';
import App from "./App";

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

