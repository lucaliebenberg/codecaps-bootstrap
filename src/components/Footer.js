// import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Image from "react-bootstrap/Image";

function Footer() {
  return (
    <Container
      fluid
      className="d-flex mt-5 text-start text-white pt-5 pb-5"
      style={{ backgroundColor: "#141B25" }}
    >
      <Container className="d-flex me-5">
        <img
          src="https://i.ibb.co/HTLZ6yY/Code-Capsules-logo-dark-Mode.png"
          alt="Code Capsules logo"
          style={{
            paddingRight: 24,
            height: 40
          }}
        />
        <h4 classname="mt-5">Code Capsules</h4>
      </Container>
      <Container className="col me-5">
        <h5>Menu</h5>
        <ul className="list-unstyled">
          <a href="#1" className="text-decoration-none text-white">
            <li>Home</li>
          </a>
          <a href="#2" className="text-decoration-none text-white">
            <li>Solutions</li>
          </a>
          <a href="#3" className="text-decoration-none text-white">
            <li>Technology</li>
          </a>
          <a href="#4" className="text-decoration-none text-white">
            <li>Pricing</li>
          </a>
          <a href="#5" className="text-decoration-none text-white">
            <li>Marketplace</li>
          </a>
        </ul>
      </Container>
      <Container className="col  me-5">
        <h5>Resources</h5>
        <ul className="list-unstyled">
          <a href="#5" className="text-decoration-none text-white">
            <li>Tutorials</li>
          </a>
          <a href="#5" className="text-decoration-none text-white">
            <li>Docs</li>
          </a>
          <a href="#5" className="text-decoration-none text-white">
            <li>FAQs</li>
          </a>
        </ul>
      </Container>
      <Container className="col me-5">
        <h5>About</h5>
        <ul className="list-unstyled">
          <a href="#5" className="text-decoration-none text-white">
            <li>Company</li>
          </a>
          <a href="#5" className="text-decoration-none text-white">
            <li>Privacy Policy</li>
          </a>
          <a href="#5" className="text-decoration-none text-white">
            <li>T's & C's</li>
          </a>
        </ul>
      </Container>
      <Container className="col me-5">
        <h5>Company</h5>
        <ul className="list-unstyled">
          <a href="#5" className="text-decoration-none text-white">
            <li>Features</li>
          </a>
          <a href="#5" className="text-decoration-none text-white">
            <li>Security</li>
          </a>
          <a href="#5" className="text-decoration-none text-white">
            <li>Business</li>
          </a>
          <a href="#5" className="text-decoration-none text-white">
            <li>Case Studies</li>
          </a>
          <a href="#5" className="text-decoration-none text-white">
            <li>Resources</li>
          </a>
        </ul>
      </Container>
      <Container>
        <Container className="d-flex mt-2">
          <i className="fa-brands fa-twitter me-2"></i>
          <i className="fa-brands fa-facebook me-2"></i>
          <i className="fa-brands fa-linkedin me-2"></i>
          <i className="fa-brands fa-github me-2"></i>
        </Container>
      </Container>
    </Container>
  );
}

export default Footer;
