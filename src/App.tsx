import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <div id="flower">
          <div className="flowerCenter"></div>
          <div className="petalFlat"></div>
          <div className="petalUp"></div>
          <div className="petalDiag1"></div>
          <div className="petalDiag2"></div>
        </div>
        <div id="name">
          {10 > 3 ? <></> : <></>}B<sup>3</sup>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
