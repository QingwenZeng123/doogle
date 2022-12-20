import { SignIn, SignOut, useAuthentication } from "../services/authService";

export default function Nav({ setPage }) {
  const user = useAuthentication();

  return (
    <div className="topnav flex">
      <div className="topnav-page-title-container">
        <h1 className="web-name">Doogle</h1>
        <div className="topnav-page-container">
          <button className="topnav-style" onClick={() => setPage("Home")}>
            Home
          </button>
          <button className="topnav-style" onClick={() => setPage("Parks")}>
            Parks
          </button>
          <button className="topnav-style" onClick={() => setPage("Events")}>
            Events
          </button>
          <button className="topnav-style" onClick={() => setPage("Shops")}>
            Shops
          </button>
          <button className="topnav-style" onClick={() => setPage("Contact")}>
            Contact
          </button>
        </div>
      </div>
      {!user ? <SignIn /> : <SignOut />}
    </div>
  );
}
