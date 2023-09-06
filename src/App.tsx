// import { useState } from "react";

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <nav>
            <NavLink to="/" rel="nm">
              <li>Home</li>
            </NavLink>{" "}
            <NavLink to="/about">
              <li>About</li>
            </NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/about" element={<About />} />
          </Routes>
        </div>{" "}
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
