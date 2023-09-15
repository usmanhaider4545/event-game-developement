import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import './style.css';
import background from "./images/ezgif-4-ebe4b003ca.gif";

function App() {

  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"  }}>
        <Home />
      </div>
  );
}

export default App;
