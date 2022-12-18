import "./Navbar.scss";
import logo from "../../Assets/svg/logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import { Container } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import vn from "../../Assets/svg/flag_vn.svg";
import en from "../../Assets/svg/flag_en.svg";
import { NavLink, useNavigate } from "react-router-dom";
import NavData from "../Nav";
function HeadingNavbar({ lang, setLang, id }) {
  const navigate = useNavigate();

  const navigateToLangVi = () => {
    // 👇️ navigate to /vi
    navigate(`/vi/${id}/huongdansudung`);
  };

  const navigateToLangEn = () => {
    // 👇️ navigate to /en
    navigate(`/en/${id}/usermanual`);
  };
  return (
    <Navbar
      key="xl"
      expand="xl"
      className="bg-color navbarContainer"
      collapseOnSelect
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand>
          {lang === "vi" && (
            <NavLink to={`/vi/${id}/huongdansudung`}>
              <img src={logo} alt="lumi-logo" className="lumi-logo"></img>
            </NavLink>
          )}
          {lang === "en" && (
            <NavLink to={`/en/${id}/usermanual`}>
              <img src={logo} alt="lumi-logo" className="lumi-logo"></img>
            </NavLink>
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
          placement="end"
        >
          <Offcanvas.Header>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-xl`}
            ></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-grow-1 pe-3 navbar-collapse">
              <NavData lang={lang} />
              <Dropdown>
                <Dropdown.Toggle variant={`#d7e0ea`} id="dropdown-basic">
                  {lang === "vi" ? (
                    <img
                      src={vn}
                      alt="VietNam Flag"
                      className="flag"
                      onClick={navigateToLangVi}
                    ></img>
                  ) : (
                    <img
                      src={en}
                      alt="England Flag"
                      className="flag"
                      onClick={navigateToLangEn}
                    ></img>
                  )}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    {lang === "vi" ? (
                      <img
                        src={en}
                        alt="England Flag"
                        className="flag"
                        onClick={navigateToLangEn}
                      ></img>
                    ) : (
                      <img
                        src={vn}
                        alt="VietNam Flag"
                        className="flag"
                        onClick={navigateToLangVi}
                      ></img>
                    )}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 formcontrol"
                aria-label="Search"
                onChange={handleform}
              />
            </Form> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
export default HeadingNavbar;
