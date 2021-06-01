import { Provider } from 'react-redux';
import './App.css';
import Heabits from './components/habits';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Ваші звички</h1>
        <Heabits />
      </div>
    </Provider>
  );
}

export default App;
