import './App.css';
import twitter from './assets/twitter.svg';
import linked from './assets/linkedin.svg';
import github2 from './assets/github2.svg';
import selfie from './assets/pic.png';
function App() {
  return (
    <div className="App">
      <div className="left">
        <div id="flower">
          <div className="flowerCenter"></div>
          <div className="petalFlat"></div>
          <div className="petalUp"></div>
          <div className="petalDiag1"></div>
          <div className="petalDiag2"></div>
        </div>
        <div id="name">
          <div></div>
          <div></div>
        </div>
        <a
          className="social"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/brycensoc"
        >
          <img src={twitter} alt="twitter icon"></img>
          Twitter
        </a>
        <a
          className="social"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/brycenbb/"
        >
          <img src={linked} alt="linkedIn icon"></img>
          LinkedIn
        </a>
        <a
          className="social"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/brycenbb"
        >
          <img src={github2} alt="Github icon"></img>
          GitHub
        </a>
      </div>
      <div className="right">
        <div id="picBox">
          <div id="pic"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
