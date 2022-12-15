import "./Navbar.scss";
import logo from "../../Assets/svg/logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import { Container } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import vn from "../../Assets/svg/flag_vn.svg";
import en from "../../Assets/svg/flag_en.svg";
import { Link } from "react-router-dom";
import NavData from "../Nav";
function HeadingNavbar({ lang, setLang }) {
  const handleLangVi = () => {
    setLang("vi");
  };
  const handleLangEn = () => {
    setLang("en");
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
          <Link to={`/${lang}`}>
            <img src={logo} alt="lumi-logo" className="lumi-logo"></img>
          </Link>
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
                      onClick={handleLangVi}
                    ></img>
                  ) : (
                    <img
                      src={en}
                      alt="England Flag"
                      className="flag"
                      onClick={handleLangEn}
                    ></img>
                  )}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    {lang === "vi" ? (
                      <img
                        src={en}
                        alt="England Flag"
                        className="flag"
                        onClick={handleLangEn}
                      ></img>
                    ) : (
                      <img
                        src={vn}
                        alt="VietNam Flag"
                        className="flag"
                        onClick={handleLangVi}
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
