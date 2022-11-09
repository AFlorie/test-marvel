import "./App.css";
import { Routes, Route } from "react-router-dom";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Creators from "./containers/Creators";
import NoMatch from "./containers/NoMatch";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="comics" element={<Comics />} />
          <Route path="creators" element={<Creators />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
