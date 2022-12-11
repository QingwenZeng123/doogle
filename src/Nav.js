import "./topbar.css";
import "./App.css";

export default function Nav({ setPage }) {
  return (
    <div class="topnav">
      <divA>Doggle</divA>
      <div onClick={() => setPage("Signup")}>Sign up</div>
      <div onClick={() => setPage("Signin")}>Sign In</div>
      <div onClick={() => setPage("Contact")}>Contact</div>
      <div onClick={() => setPage("Services")}>Services</div>
      <div onClick={() => setPage("Events")}>Events</div>
      <div onClick={() => setPage("Parks")}>Parks</div>
      <div onClick={() => setPage("Home")}>Home</div>
    </div>
  );
}

//      /*park, local breeder in services*/
