import logo from './Cowboy-Mascot-Final.png';
import header from './StraightenerHeader.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={header} className="Header-image" alt="header" />
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Ask a question anonymously to people of your choosing
        </p> */}
        <p>
          Coming Winter 2022, Stay Tuned
        </p>
      </header>
    </div>
  );
}

export default App;
