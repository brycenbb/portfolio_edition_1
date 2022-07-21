import './App.css';
import twitter from './assets/twitter.svg';
import linked from './assets/linkedin.svg';
import github2 from './assets/github2.svg';
import project1 from './assets/portfolio_project_pic1.png';
function App() {
  // document.querySelector('#trackerL')?.addEventListener('mouseenter', () => {
  //   console.log('hi');
  //   document.querySelector('.left')?.classList.toggle('grow');
  // });
  // document.querySelector('#trackerL')?.addEventListener('mouseleave', () => {
  //   document.querySelector('.left')?.classList.toggle('grow');
  // });

  function handleClick(input: string) {
    document.getElementById(`${input}`)!.scrollIntoView(true);
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
        <nav>
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
            <h3>About</h3>
            <p>
              I am to be a graduate of School of Code cohort 12. I recently
              received my Masters in International Education in Liecester and
              decided to pursue my passion of tech. I hope to combine technology
              and education over the course of my career.
            </p>
          </div>
          <div className="third" id="projects">
            <h3>Projects</h3>
            <div className="project">
              <p>
                This full-stack application was developed as part of a week long
                4 person project as part of School of Code using the Agile
                methodology.
              </p>
              <div>
                <div>
                  <em>Don't Panic</em>
                </div>
                <img
                  src={project1}
                  alt="school of code week long project"
                ></img>
                <div className="info">
                  <div>Live</div>
                  <div>Github</div>
                </div>
              </div>
            </div>
          </div>
          <div className="fourth" id="contact">
            <h3>Contact</h3>
          </div>
        </div>
      </div>
      {/* <div id="trackerBox">
        <div id="trackerL"></div>
        <div id="trackerR"></div>
      </div> */}
    </div>
  );
}

export default App;
