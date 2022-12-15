import data from "../../Assets/Data/headingNavbar.json";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./Nav.scss";
function NavData({ lang }) {
  return (
    <>
      {lang === "vi" &&
        data.headingNavbarVi.map((item) => (
          <Nav.Link
            as={Link}
            key={item.id}
            to={`${item.path}`}
            className="styledlink"
            eventKey={item.id}
          >
            {item.script}
          </Nav.Link>
        ))}
      {lang === "en" &&
        data.headingNavbarEn.map((item) => (
          <Nav.Link
            as={Link}
            key={item.id}
            to={`/en/${item.path}`}
            className="styledlink"
            eventKey={item.id}
          >
            {item.script}
          </Nav.Link>
        ))}
    </>
  );
}
export default NavData;
