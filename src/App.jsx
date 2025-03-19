import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./template/Homepage";
import Notfound from "./template/Notfound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
