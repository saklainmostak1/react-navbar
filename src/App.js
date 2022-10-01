
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold underline">This is header</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
