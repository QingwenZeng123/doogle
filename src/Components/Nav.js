import { SignIn, SignOut, useAuthentication } from "../services/authService";

export default function Nav({ setPage }) {
  const user = useAuthentication();

  return (
    <div className="nav__container">
      <h1 className="nav__web-name">Doogle</h1>
      <div className="nav__page-container">
        <button className="nav__page" onClick={() => setPage("Home")}>
          Home
        </button>
        <button className="nav__page" onClick={() => setPage("Parks")}>
          Parks
        </button>
        <button className="nav__page" onClick={() => setPage("Events")}>
          Events
        </button>
        <button className="nav__page" onClick={() => setPage("Shops")}>
          Shops
        </button>
        <button className="nav__page" onClick={() => setPage("Contact")}>
          Contact
        </button>
      </div>
      {!user ? <SignIn /> : <SignOut />}
    </div>
  );
}
