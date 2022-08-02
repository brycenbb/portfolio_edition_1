import './App.css';
import twitter from './assets/twitter.svg';
import linked from './assets/linkedin.svg';
import github2 from './assets/github2.svg';
import html from './assets/html.png';
import css from './assets/css.png';
import js from './assets/js.png';
import react from './assets/react.png';
import node from './assets/node.png';
import netlify from './assets/netlify.webp';
import heroku from './assets/heroku.png';
import cypress from './assets/cypress.svg';
import jest from './assets/jest.png';
import contentful from './assets/contentful.png';
import typescript from './assets/typescript.png';
import mui from './assets/mui.png';
import git from './assets/git.png';
import github from './assets/github.png';
import sql from './assets/sql.png';
import arrow from './assets/arrow.svg';
import Project from './Project';
import Form from './Form';
import SwitchLabels from './Switch';
import { useState } from 'react';
function App() {
  const [smooth, setSmooth] = useState(true);
  function handleClick(input: string) {
    document.getElementById(`${input}`)!.scrollIntoView(true);
  }
  function takeToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.getElementById('navbar')!.scrollIntoView(true);
  }
  // useEffect(() => {
  //   console.log('in effect');
  //   window.addEventListener('scroll', () => {
  //     console.log('scrolling');
  //   });
  // });
  return (
    <main className={smooth ? 'App smooth' : 'App'}>
      <section className="left">
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
      </section>

      <section className="right">
        <SwitchLabels smooth={smooth} setSmooth={setSmooth}></SwitchLabels>
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
          <button id="topButton" onClick={takeToTop}>
            <img src={arrow} alt="Back to top"></img>
            <div>Back to top</div>
          </button>
        </nav>
        <section id="container">
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
          <section className="about" id="about">
            <h3>About Me</h3>
            <p>
              Hi, I’m Brycen. My love for learning, technology, and community
              brought me to School of Code to develop industry-ready skills and
              a wonderful network of fellow coders and tech enthusiasts. I’ve
              also brought my passion as a researcher with me to assist my data
              driven approach to developing projects I love and that matter. I
              hail from California but have come to find my new home in
              Leicester. When I’m not coding I am either travelling, practising
              gymnastics, or relaxing with friends and family, so if you want to
              find me, you can do so online or at tech events across the
              Midlands!
            </p>
            <div className="skill-box">
              <div className="skillName">My Tech Skills</div>
              <div className="skills">
                <div>
                  <img src={html} alt="html"></img>HTML
                </div>
                <div>
                  <img src={css} alt="css"></img>CSS
                </div>
                <div>
                  <img src={js} alt="javascript"></img>JavaScript
                </div>
                <div>
                  <img src={react} alt="react"></img>React
                </div>
                <div>
                  <img src={node} alt="node"></img> Node
                </div>
                <div>
                  <img src={mui} alt="mui"></img> Material UI
                </div>
                <div>
                  <img src={sql} alt="sql"></img> SQL
                </div>
                <div>
                  <img src={jest} alt="jest"></img>Jest
                </div>
                <div>
                  <img src={cypress} alt="cypress"></img>Cypress
                </div>
                <div>
                  <img src={heroku} alt="heroku"></img>Heroku
                </div>
                <div>
                  <img src={netlify} alt="netlify"></img>Netlify
                </div>
                <div>
                  <img src={typescript} alt="typescript"></img>TypeScript
                </div>
                <div>
                  <img src={contentful} alt="contentful"></img>Contentful
                </div>
                <div>
                  <img src={git} alt="git"></img>Git
                </div>
                <div>
                  <img src={github} alt="github"></img> GitHub
                </div>
              </div>
            </div>
          </section>
          <section className="third" id="projects">
            <h3>Projects</h3>
            <Project></Project>
          </section>
          <section className="fourth" id="contact">
            <h3>Contact</h3>
            <h4>Send me a message!</h4>
            <Form></Form>
          </section>
        </section>
      </section>
    </main>
  );
}

export default App;
