import './App.css';
import twitter from './assets/twitter.svg';
import linked from './assets/linkedin.svg';
import github2 from './assets/github2.svg';
// import project1 from './assets/portfolio_project_pic1.png';
import arrow from './assets/arrow.svg';
import Project from './Project';
import Form from './Form';
import SwitchLabels from './Switch';
function App() {
  function handleClick(input: string) {
    document.getElementById(`${input}`)!.scrollIntoView(true);
  }
  function takeToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.getElementById('navbar')!.scrollIntoView(true);
  }
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
        <SwitchLabels></SwitchLabels>
        <nav id="navbar">
          <button
            onClick={() => {
              handleClick('about');
            }}
          >
            About
          </button>
          <button
            onClick={() => {
              handleClick('projects');
            }}
          >
            Projects
          </button>
          <button
            onClick={() => {
              handleClick('contact');
            }}
          >
            Contact
          </button>
          <div id="topButton" onClick={takeToTop}>
            <img src={arrow} alt="Back to top"></img>
            <div>Back to top</div>
          </div>
        </nav>
        <div id="container">
          <div className="first">
            <div id="intro">
              <div id="picBox">
                <div id="pic"></div>
              </div>
              <div>
                <h2>Hi, I'm Brycen!</h2>
                <h3>A Midlands-based Full-Stack Developer</h3>
              </div>
            </div>
          </div>
          <div className="about" id="about">
            <h3>About Me</h3>
            <p>
              Hi, I’m Brycen. My love for learning, technology, and community
              brought me to School of Code to develop industry-ready skills and
              a wonderful network of fellow coders and tech enthusiasts. I’ve
              also brought my passion as a researcher with me to assist my data
              driven approach to developing projects I love and that matter. I
              hail from California but have come to find my new home in
              Leicester. When I’m not coding I am either traveling, practicing
              gymnastics, or relaxing with friends and family, so if you want to
              find me, you can do so online or at tech events across the
              Midlands!
            </p>
          </div>
          <div className="third" id="projects">
            <h3>Projects</h3>
            <Project></Project>
          </div>
          <div className="fourth" id="contact">
            <h3>Contact</h3>
            <h4>Send me a message!</h4>
            <Form></Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
