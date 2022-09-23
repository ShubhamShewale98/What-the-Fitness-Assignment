import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Gyms from './Pages/Gyms';
import Card from './Component/Card';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Gyms/>
     
    </div>
  );
}

export default App;
