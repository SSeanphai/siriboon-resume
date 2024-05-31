import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import ResumeData from "../../utils/ResumeData";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="Header">
      <Container>
        <Navbar.Brand href="/" style={{ color: "white" }}>
          <img
            alt=""
            src="https://i.ibb.co/M8SxLxf/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {"  "}
          About me
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/portfolio"
              style={{ fontWeight: "bold", color: "white" }}
            >
              Portfolio
            </Nav.Link>
          </Nav>

          <div className="header_right">
            {Object.keys(ResumeData.socials).map((Key) => (
              <a
                key={Key}
                href={ResumeData.socials[Key].link}
                target="_blank"
                className="social-link-margin"
              >
                {ResumeData.socials[Key].icon}
              </a>
            ))}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
