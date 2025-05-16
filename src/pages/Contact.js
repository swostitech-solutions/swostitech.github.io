import React,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ParticlesBackground from "./Animation/ParticlesBackground";
const Contact = () => {
 const [hoverIndex, setHoverIndex] = useState(null);

 const cardStyle = (index) => ({
   padding: "1rem",
   backgroundColor: hoverIndex === index ? "#479EE3" : "#f3f4f6",
   borderRadius: "0.75rem",
   boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
   transition: "background-color 0.3s ease",
   marginBottom: "20px",
   color: hoverIndex === index ? "#fff" : "#131313",
 });
  return (
    <Container className="pt-5">
      <ParticlesBackground />
      <Row className="mt-5 py-5 gap-5">
        <Col
          lg={3}
          md={4}
          sm={6}
          xs={12}
          onMouseEnter={() => setHoverIndex(0)}
          onMouseLeave={() => setHoverIndex(null)}
          style={cardStyle(0)}
        >
          <h3 className="font-bold text-xl mb-2">Address</h3>
          <p>
            Swostitech UG-26,DLF Cybercity, Technology Corridor, Chandaka
            Industrial Estate, Patia, Bhubaneswar, Odisha, 751024
          </p>
        </Col>

        <Col
          lg={3}
          md={4}
          sm={6}
          xs={12}
          onMouseEnter={() => setHoverIndex(1)}
          onMouseLeave={() => setHoverIndex(null)}
          style={cardStyle(1)}
        >
          <h3 className="font-bold text-xl mb-2">Address</h3>
          <p>
            Swostitech Pvt Ltd. Prestige Blue Chip 2nd Floor, Tower 3, Prestige
            Blue Chip, Dairy Colony, Adugodi Koramangala Bengaluru 560029 .
          </p>
        </Col>

        {/* Call Us */}
        <Col
          lg={3}
          md={4}
          sm={6}
          xs={12}
          onMouseEnter={() => setHoverIndex(2)}
          onMouseLeave={() => setHoverIndex(null)}
          style={cardStyle(2)}
        >
          <h3 className="font-bold text-xl mb-2">Email | Call Us</h3>
          <p>support@example.com</p>
          <p>info@swostitechnologies.com</p>
          <p>IN +91 9971573916</p>
          <p>USA +1 415 315 9943</p>
        </Col>
      </Row>

      {/* Get in Touch Section */}
      <Row className="mb-3 ">
        <Col lg={6} md={12} sm={12} xs={12}>
          <h2
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: "bolder",
              textAlign: "justify",
            }}
          >
            GET IN TOUCH WITH OUR TEAM
          </h2>
          <p className="text-gray-600 mb-8">
            Trusted by more than 200 customers
          </p>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <form
            action="https://formspree.io/f/xlekqkjj"
            method="POST"
            className="w-100"
          >
            <input
              type="text"
              placeholder="Your name"
              className="w-100 mb-4 p-3 border border-gray-300 rounded bg-gray-100"
              required
            />
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-100 p-3 border border-gray-300 rounded bg-gray-100"
                required
              />
            </div>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-100 p-3 border border-gray-300 rounded bg-gray-100"
                required
              />
            </div>
            <textarea
              placeholder="Write Message"
              className="w-100 h-32 mb-4 p-3 border border-gray-300 rounded bg-gray-100"
              required
            />
            <button
              type="submit"
              className=" btn btn-primary  py-3 px-6 rounded font-semibold"
            >
              SEND A MESSAGE
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
