import './App.css';

function App() {
  const textJSX = 'Hello, JSX!';
  const ElementH1 = <h1>{textJSX}</h1>;

  return (
    <div className="App">{ElementH1}</div>
  );
}

export default App;
