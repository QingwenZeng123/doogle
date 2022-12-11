import "./topbar.css";
import "./App.css";

export default function Nav({ setPage }) {
  return (
    <div className="topnav">
      <div onClick={() => setPage("Home")}>Home</div>
      <div onClick={() => setPage("parks")}>Parks</div>
      <div onClick={() => setPage("entertainment")}>Entertainment</div>
      <div onClick={() => setPage("events")}>Events</div>
      <div onClick={() => setPage("contact")}>Services</div>
      <div onClick={() => setPage("about")}>Breeders</div>
      <div onClick={() => setPage("contact")}>Contact</div>
      <div onClick={() => setPage("signin")}>Sign In</div>
      <div onClick={() => setPage("signup")}>Sign up</div>
    </div>
  );
}

//      /*park, local breeder in services*/
