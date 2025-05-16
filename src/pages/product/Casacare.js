import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./Product.css";
import casacare from "../../assets/product/casacare.png";
import bhs1 from "../../assets/product/bhs1.jpg";
import bhs2 from "../../assets/product/bhs2.jpg";
import bhs3 from "../../assets/product/bhs3.jpg";
import ParticlesBackground from "../Animation/ParticlesBackground";
import {
  FcHome,
  FcLock,
  FcMoneyTransfer,
  FcPortraitMode,
  FcOvertime,
  FcOk,
} from "react-icons/fc";
const features = [
  {
    icon: <FcHome size={36} />,
    title: "Convenience",
    description:
      "Book services from the comfort of your home using our easy-to-navigate app or website. No more calling or waiting—get what you need with just a few taps.",
  },
  {
    icon: <FcLock size={36} />,
    title: "Verified Professionals",
    description:
      "All service providers go through extensive training and background checks, ensuring trustworthy, professional service every time.",
  },
  {
    icon: "🧰",
    title: "Wide Range of Services",
    description:
      "From appliance repairs and electrical work to beauty treatments and deep cleaning—we've got it all in one place.",
  },
  {
    icon: "💰",
    title: "Upfront Pricing",
    description:
      "We believe in transparency. All services come with clear pricing and no hidden charges, so you always know what you're paying for",
  },
  {
    icon: <FcOvertime size={36} />,
    title: "Time-Saving",
    description:
      "Skip the hassle of hunting down local technicians. Our platform offers quick booking and fast service delivery at your chosen time",
  },
  {
    icon: <FcOk size={36} />,
    title: "Quality Assurance",
    description:
      "To maintain high standards, our partners are regularly evaluated and trained, guaranteeing a top-tier service experience.",
  },
  {
    icon: <FcMoneyTransfer size={36} />,
    title: "Cashless Payments",
    description:
      "Enjoy secure and seamless transactions with our integrated digital payment options—no cash, no worries.",
  },
  {
    icon: <FcPortraitMode size={36} />,
    title: "Personalized Experience",
    description:
      "Choose your preferred professional based on real customer ratings and reviews to ensure the perfect match for your needs.",
  },
];

function Casacare() {
  return (
    <Container className="my-5 pt-5">
      <ParticlesBackground />
      <Row className="mb-4">
        <Col>
          <h2 className="text-center fw-bold text-dark fade-up">
            Experience Trusted Home Services at Your Fingertips
          </h2>
          <p className="text-center text-muted fs-5 fade-up">
            Transforms your daily HR workflows, keeping you ahead in every task.
          </p>
        </Col>
      </Row>
      <Row className="align-items-justify mt-5">
        <Col lg={6} md={12} sm={12} xs={12} className="mb-5">
          <Image
            src={casacare}
            alt="casacare"
            fluid
            className="flip-up-image"
            style={{
              width: "100%",
              height: "100%",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              border: "6px solid rgb(172, 179, 197)",
              borderRadius: "3%",
            }}
          />
        </Col>

        <Col lg={6} md={12} sm={12} xs={12} className="mb-5">
          <h4 className="fw-bold mb-3 fade-up">
            Casa Care Complete Home Care Solutions
          </h4>

          <p className="zoom-in">
            Casa Care is your one-stop solution for on-demand home services,
            bringing skilled and verified professionals right to your doorstep.
            Whether it's a minor appliance repair, deep cleaning, or a relaxing
            beauty session, we ensure a seamless and high-quality experience.
          </p>

          <p className="zoom-in">
            Casa Care is designed with your convenience in mind. Through our
            intuitive online platform, you can browse services, view transparent
            pricing, schedule appointments, and track service status—all in just
            a few clicks. Our customer support team is always ready to assist,
            and our commitment to quality guarantees peace of mind with every
            service call. Experience hassle-free home maintenance with Casa
            Care—trusted by families, powered by professionals.
          </p>
        </Col>
      </Row>
      {/* Feature Cards */}
      <Row className="g-4 mb-3 mt-3">
        {features.map((item, index) => (
          <Col lg={4} md={6} sm={12} xs={12} key={index} className="mb-5">
            <Card className="hrms-card h-100 text-center p-3">
              <div
                className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#f2f2f2",
                  fontSize: "24px",
                }}
              >
                {item.icon}
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="align-items-justify">
        <Col lg={6} md={12} sm={12} xs={12} className="mb-5">
          <h4 className="mb-3 flip-up">
            Casa Care – Your Trusted Home Services Marketplace
          </h4>
          <p className="zoom-in">
            Casa Care is an all-in-one e-commerce platform offering a wide range
            of reliable home services at your fingertips. From professional deep
            cleaning and appliance repair to AC servicing, chimney maintenance,
            electrical work, and more—our network of skilled,
            background-verified experts delivers quality service right at your
            doorstep. With an easy-to-use interface, secure online booking, and
            real-time tracking, Casa Care ensures your home stays
            well-maintained with minimal effort and maximum satisfaction.
          </p>
          <h4 className="mb-3 flip-up">
            Powerful Features for Modern HR Needs
          </h4>
          <p className="zoom-in">
            Whether it’s scheduling shifts, managing departments and roles, or
            maintaining an up-to-date holiday calendar, Swostitech HRMS offers a
            complete suite of tools to run a smooth and compliant workplace.
            With robust functionality like biometric attendance, real-time
            regularization, and integrated payroll, the system reduces manual
            errors and frees up time for more strategic HR initiatives.
          </p>
        </Col>

        <Col
          lg={6}
          md={12}
          sm={12}
          xs={12}
          className="order-lg-2 image-grid-wrapper mb-5"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div className="about-image-grid">
            <img
              src={bhs1}
              className="img-grid-main"
              alt="Our company vision"
            />
            <img
              src={bhs2}
              className="img-grid-secondary zoom-in-image"
              alt="Our team"
            />
            <img
              src={bhs3}
              className="img-grid-tertiary zoom-in-image"
              alt="Our workspace"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Casacare;
