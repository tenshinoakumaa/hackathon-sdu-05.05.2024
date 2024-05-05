import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as React from "react";
import Container from "./components/Container";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Requests from "./components/Requests";
import FAQ from "./components/FAQ";
import Apply from "./components/Apply";
import Page404 from "./components/Page404";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Container>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
        <Footer />
      </Container>
    </>
  );
}

export default App;
