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
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          <img
            alt=""
            src="https://media.discordapp.net/attachments/813807614462263336/1237323212233244713/logo.png?ex=663b3a8a&is=6639e90a&hm=8912d5506aa11e482f109b69652a0dfd413140e235c39c84ffc8ed1addb82ff8&=&format=webp&quality=lossless"
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
            <Nav.Link style={{ fontWeight: "bold", color: "white" }}>
              Resume
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
