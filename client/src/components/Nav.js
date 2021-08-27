import { NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <div id="headNav">
      {/* div containing nav links to the other "pages" on the website. This allows App.js to route to the correct places */}
      <div id="navCon">
        {/* active class name allows for differnt styling based on whether the link has been clicked last */}
        <NavLink activeClassName="active" exact to="/">
          <h3 className="navContent">Home</h3>
        </NavLink>
        <NavLink activeClassName="active" to="About">
          <h3 className="navContent">About</h3>
        </NavLink>
        <NavLink activeClassName="active" to="Projects">
          <h3 className="navContent">Projects</h3>
        </NavLink>
        <NavLink activeClassName="active" to="Work-History">
          <h3 className="navContent"> Work History</h3>
        </NavLink>
        <NavLink activeClassName="active" to="Contact">
          <h3 className="navContent">Contact</h3>
        </NavLink>
      </div>
    </div>
  );
}
export default Nav;
