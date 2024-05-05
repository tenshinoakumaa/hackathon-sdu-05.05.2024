import * as React from "react";
import Container from "./components/Container";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Requests from "./components/Requests";
import FAQ from "./components/FAQ";
import Help from "./components/Help";
import Apply from "./components/Apply";
import Page404 from "./components/Page404";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Container>
        <Nav />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/help" element={<Help />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
}

export default App;
