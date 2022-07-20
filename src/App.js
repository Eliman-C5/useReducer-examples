import ChangingMenu from './components/ChangingMenu';
import Counter from './components/Counter';
import DynamicMap from './components/dynamicMap/DynamicMap';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>useReducer Examples</h1>
      <hr />
      <ChangingMenu />
      <hr />
      <Counter />
      <hr />
      <DynamicMap />
    </div>
  );
}

export default App;
