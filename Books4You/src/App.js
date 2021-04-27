import './App.css';
import DisplayCounter from './Components/DisplayCounter';
import Increments from './Components/Increments';
import Add from './Components/Math';

function App() {
  return (
    <div className="App">
      <DisplayCounter />
      <Increments />
      <Add />
    </div>
  );
}

export default App;
