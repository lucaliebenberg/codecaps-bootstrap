import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  return (
    <>
      {/* NAVBAR STARTS HERE */}
      <Navbar
        variant="dark"
        className="navbar-expand-xl"
        style={{ backgroundColor: "#141B25" }}
      >
        <Container>
          <Navbar.Brand
            className="col-sm-4 col-md-12"
            href="#home"
            style={{ maxWidth: "5rem" }}
          >
            <img
              src="https://i.ibb.co/HTLZ6yY/Code-Capsules-logo-dark-Mode.png"
              width="100%"
              height="100%"
              alt="Code Capsules logo"
              style={{
                paddingRight: 12
              }}
            />
            Code Capsules
          </Navbar.Brand>
          <Nav className="md-4 sm-1 ">
            <Nav.Link href="#all-capsules">All Capsules</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
