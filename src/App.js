import { Provider } from 'react-redux';
import './App.css';
import Diagram from './components/diagram';
import Heabits from './components/habits';
import store from './redux/store';
import * as V from 'victory';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Ваші звички</h1>
        <Heabits />
        <Diagram />

      </div>
    </Provider>
  );
}

export default App;
