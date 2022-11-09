import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Creators from "./containers/Creators";
import NoMatch from "./containers/NoMatch";
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/comics">Comics</Link>
          </li>
          <li>
            <Link to="/creators">Creators</Link>
          </li>
        </ul>
      </nav>
      <div className="App">
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="comics" element={<Comics />} />
          <Route path="creators" element={<Creators />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
