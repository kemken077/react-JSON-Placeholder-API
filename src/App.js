import store from './store/createStore';
import { Provider } from 'react-redux';

import ExecutePlaceholder from './components/execute-placeholder';
import Results from './components/results';

function App() {
  return (
    <Provider store={store}>
      <ExecutePlaceholder/>
      <Results/>
    </Provider>
  );
}

export default App;

/**
 * Architecture:
 * Store
 * Reducer
 * Saga
 * Components
 */