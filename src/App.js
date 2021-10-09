import "./App.css";
import Sun from "./sun.png";

function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="container">
          <div className="input-group rounded">
            <form id="engine">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Type your city..."
                id="search"
              />
              <input
                type="submit"
                value="Search"
                className="form-control rounded"
                id="search-button"
              />
            </form>
            <button id="current-button">📍</button>
          </div>
          <div className="row">
            <div className="col-6">
              <span className="main">Currently </span>
              <img id="icon" src={Sun} alt="Sun" />
              <h1 id="current-temp">20°C</h1>
              <span id="condition">Sunny </span>
              <span className="main" id="in">
                in
              </span>
              <h2 id="city-name">Inverness</h2>
              <span className="info" id="humidity">
                {" "}
                Humidity: 60%
              </span>
              <span className="info" id="wind">
                Wind: 15 km/h
              </span>
            </div>
          </div>
          <div className="forecast" id="forecast"></div>
        </div>
      </div>
      <div className="signature">
        <a
          href="https://github.com/MartinaRak/"
          rel="noopener noreferrer"
          id="signatureLink"
        >
          Open-source code
        </a>
        by Martina Rak
      </div>
    </div>
  );
}

export default App;
