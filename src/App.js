import logo from './Cowboy-Mascot-Final.png';
import header from './StraightenerHeader.png';
import './App.css';
import Pdf from './PrivacyPolicy.pdf';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={header} className="Header-image" alt="header" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coming Winter 2022, Stay Tuned
        </p>
        <a href = {Pdf} target = "_blank">Privacy Policy</a>
      </header>
    </div>
  );
}

export default App;
