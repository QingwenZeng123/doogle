import Home from "./pages/Home";
import Nav from "./Nav";
import { useState } from "react";
import Parks from "./pages/Parks";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./Footer";
import Header from "./Header";
// import { SignIn, SignOut, useAuthentication } from "../services/authService";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div className="App">
      <div className="Page-container">
        <Nav setPage={setPage} />
        <Header headname={page} />
        {/* <h1>{page}</h1> */}
        {page === "Home" ? (
          <Home setPage={setPage}/>
        ) : page === "Parks" ? (
          <Parks />
        ) : page === "Events" ? (
          <Events/>
        ) : page === "Services" ? (
          <Services />
        ) : page === "Contact" ? (
          <Contact />
        ) : (
          <Home setPage={setPage}/>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
