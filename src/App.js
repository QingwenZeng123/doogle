import Home from "./pages/Home";
import Nav from "./Nav";
import { useState } from "react";
import Parks from "./pages/Parks";
import Events from "./pages/Events";
import Breeders from "./pages/Breeders";
import Footer from "./Footer";
import Header from "./Header";
// import { SignIn, SignOut, useAuthentication } from "../services/authService";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div className="App">
      <div className="Page-container">
        <Nav setPage={setPage} />
        <div className="Header-outline">
          <Header />
        </div>
        <pages />
        <h1>{page}</h1>
        {page === "Home" ? (
          <Home />
        ) : page === "parks" ? (
          <Parks />
        ) : page === "Events" ? (
          <Events />
        ) : page === "Breeders" ? (
          <Breeders />
        ) : (
          <Home />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
