import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/st_newlogo.png";
import bg from "../assets/bgmodal.jpg";
const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);

  const showDropdown = () => setShow(true);
  const hideDropdown = () => setShow(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form submitted!");
    handleClose();
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
      style={{
        background: scrolled
          ? "black"
          : "linear-gradient(to right,rgb(80, 77, 77), #479EE3)",
        transition: "0.4s ease",
      }}
    >
      <Container>
        {/* <Navbar.Brand as={Link} to="/">
          <img src={logo}  alt="logo" className="logo "  />
        </Navbar.Brand> */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="logo" className="logo me-2" />
          <span className="brand-name">SWOSTITECH</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <NavDropdown
              title="Products"
              id="products-dropdown"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              onClick={() => setShow(!show)}
              align="end"
            >
              <NavDropdown.Item as={Link} to="/human_resource">
                Human Resource Managemnet Software
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/law_firm">
                Law Firm Management Software
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/case_care">
                Casa Care
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/acadix">
                Acadix[Complete Educational Management Solutions]
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mining_operations">
                Mining Operations with Oracle-Powered ERP
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/power_utility">
                Utility Operations with Oracle-Powered ERP
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Button
            variant="outline-info"
            className="ms-3 custom-demo-button"
            onClick={handleShow}
          >
            Request for Demo
          </Button>
        </Navbar.Collapse>

        <Modal show={showModal} onHide={handleClose} centered backdrop="static">
          <Modal.Header
            closeButton
            style={{ background: "#ccc", color: "#479EE3" }}
          >
            <Modal.Title
              style={{
                color: "#479EE3",
                fontFamily: "'Merriweather', serif",
                fontWeight: "bold",
              }}
            >
              Please Fill in Your Demo Request Details
            </Modal.Title>
          </Modal.Header>

          <Modal.Body
            style={{
              background: "#ccc",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              padding: "20px",
            }}
          >
            <div
              style={{
                // backgroundColor: "rgba(255, 255, 255, 0.9)",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <Form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/xlekqkjj"
                method="POST"
              >
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label style={{ fontWeight: "bold" }}>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    required
                    style={{ border: "3px solid #616161" }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                    style={{ border: "3px solid #616161" }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Phone Number
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    style={{ border: "3px solid #616161" }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formReason">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Contact Reason
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Why do you want a demo?"
                    required
                    style={{ border: "3px solid #616161" }}
                  />
                </Form.Group>

                <div className="d-flex justify-content-end">
                  <Button variant="primary" type="submit" className="me-2">
                    Send
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                </div>
              </Form>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
