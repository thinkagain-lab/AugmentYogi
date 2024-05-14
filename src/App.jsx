import About from "./pages/About";
import TAC from "./pages/TAC";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
        <Route path="/termsandconditions" element={<TAC/>} />
      </Routes>

    </>
  );
}

export default App;
