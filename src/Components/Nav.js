import "./Navbar/topbar.css";
import { SignIn, SignOut, useAuthentication } from "../services/authService";
// import ".../App.css";

export default function Nav({ setPage }) {
  const user = useAuthentication();

  return (
    <div className="topnav">
      <div className="topnav-page-title-container">
        <h1 className="web-name">Doogle</h1>
        <div className="topnav-page-container">
          {/*           <div onClick={() => setPage("Contact")}>Contact</div>
          <div onClick={() => setPage("Services")}>Services</div>
          <div onClick={() => setPage("Events")}>Events</div>
          <div onClick={() => setPage("Parks")}>Parks</div>
          <div onClick={() => setPage("Home")}>Home</div> */}
          <button className="topnav-style" onClick={() => setPage("Contact")}>
            Contact
          </button>
          <button className="topnav-style" onClick={() => setPage("Services")}>
            Services
          </button>
          <button className="topnav-style" onClick={() => setPage("Events")}>
            Events
          </button>
          <button className="topnav-style" onClick={() => setPage("Parks")}>
            Parks
          </button>
          <button className="topnav-style" onClick={() => setPage("Home")}>
            Home
          </button>
        </div>
      </div>
      {!user ? <SignIn /> : <SignOut />}
    </div>
  );
}

/*park, local breeder in services*/
