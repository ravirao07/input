import logo from './logo.svg';
import './App.css';
import Input from './Input';
import Customer from './props/Customer';

function App() {
  return (
    <div className="App">
      <h1>App component</h1>
      <Customer name="Ravi"/>
      <h2>Props : ------------- </h2>
      <h2>----------------------</h2>
      <h2>Ravi Rao</h2>
       <Input/>
    </div>
  );
}

export default App;
