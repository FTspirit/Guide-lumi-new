import data from "../../Assets/Data/headingNavbar.json";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./Nav.scss";
function NavData({ lang }) {
  return (
    <>
      {lang === "vi" &&
        data.headingNavbarVi.map((item) => (
          <NavLink
            key={item.id}
            to={`${item.path}`}
            className="styledlink"
            eventKey={item.id}
          >
            {item.script}
          </NavLink>
        ))}
      {lang === "en" &&
        data.headingNavbarEn.map((item) => (
          <NavLink
            key={item.id}
            to={`/en/${item.path}`}
            className="styledlink"
            eventKey={item.id}
          >
            {item.script}
          </NavLink>
        ))}
    </>
  );
}
export default NavData;
