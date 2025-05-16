import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaLinkedin,
  FaWhatsappSquare,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      style={{
        // backgroundColor: "rgb(61, 100, 210)",
        background: "linear-gradient(to right,rgb(80, 77, 77), #479EE3",
        color: "white",
        marginTop: "auto",
        fontFamily: "'Jost', sans-serif",
        position: "relative",
        zIndex: 0,
      }}
    >
      <Container className="pt-4 pb-2">
        <Row>
          <Col md={6} style={{ textAlign: "justify" }}>
            <h5>Swostitech </h5>
            <p style={{ textAlign: "justify" }}>
              UG-26,DLF Cybercity, Technology Corridor,
              <br /> Chandaka Industrial Estate, Patia, <br />
              Bhubaneswar, Odisha, 751024
            </p>
            <p style={{ textAlign: "justify" }}>
              Swostitech Prestige Blue Chip 2nd Floor, <br />
              Tower 3,Prestige Blue Chip, Dairy Colony,
              <br /> Adugodi Koramangala ,Bengaluru, 560029 <br />
            </p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <a
                  href="/about"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/career"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Career
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Connect With Us</h5>
            IN +91 9971573916,
            <br /> USA +1 415 315 9943
            <br /> Email: info@swostitechnologies.com <br />
            <div>
              <FaLinkedin size={27} />
              <FaWhatsappSquare size={27} />
              <FaInstagramSquare size={27} />
              <FaFacebookSquare size={27} />
            </div>
          </Col>
        </Row>

        <hr style={{ borderTop: "1px solid silver" }} />

        <Row>
          <p className="mb-0 text-center">
            &copy; {new Date().getFullYear()} Swostitech . All rights reserved.
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
