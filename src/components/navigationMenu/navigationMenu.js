import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../logo.svg";

const NavigationMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navigation-menu">
      <LinkContainer to="/home">
        <Navbar.Brand>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav justify activeKey="/home" className="navigation-menu-links">
          <Nav.Item>
            <LinkContainer to="/downloads">
              <Nav.Link>Downloads</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavigationMenu;
