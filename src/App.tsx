import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import AppLayout from "./layouts/app.layout";

const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
