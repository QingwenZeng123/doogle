import Home from "./Pages/Home";
import Nav from "./Nav.js";
import { useState } from "react";
import Parks from "./Pages/ParksPlaceholder/Parks";
import Events from "./Pages/Events";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Footer from "./Footer";
import Header from "./Header";
import { SignIn, SignOut, useAuthentication } from "../services/authService";

function App() {
  const [page, setPage] = useState("Home");
  /*   const user = useAuthentication(); */

  return (
    <div className="App">
      <div className="Page-container">
        <Nav setPage={setPage} />
        <Header headname={page} />
        {page === "Home" ? (
          <Home setPage={setPage} />
        ) : page === "Parks" ? (
          <Parks />
        ) : page === "Events" ? (
          <Events />
        ) : page === "Services" ? (
          <Services />
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
