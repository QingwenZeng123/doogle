import Home from "./pages/Home";
import Nav from "./Nav.js";
import { useState } from "react";
import Parks from "./pages/ParksPlaceholder/Parks";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Shops from "./pages/Shops";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [page, setPage] = useState("Home");
  return (
    <div className="App">
      <div className="page__container">
        <Nav setPage={setPage} />
        <Header headname={page} />
        {page === "Home" ? (
          <Home setPage={setPage} />
        ) : page === "Parks" ? (
          <Parks />
        ) : page === "Events" ? (
          <Events />
        ) : page === "Shops" ? (
          <Shops />
        ) : page === "Contact" ? (
          <Contact />
        ) : (
          <Home setPage={setPage} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
