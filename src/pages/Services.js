import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../App.css";
import ParticlesBackground from "./Animation/ParticlesBackground";

const servicesData = [
  {
    title: "Web Development & Designing",
    description:
      "Swostitech Solutions is a leading website development company in India, offering a wide array of website design services for SMEs as well as large enterprises. We provide end-to-end solutions for both web and app development.",

    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
  },
  {
    title: "Android & iOS Development",
    description:
      "At Swostitech, we specialize in delivering high-quality mobile app development services for both Android and iOS platforms. Our expert team of developers uses the latest technologies and frameworks to create seamless, feature-rich apps that deliver an exceptional user experience..",
    icon: "https://cdn-icons-png.flaticon.com/512/2721/2721275.png",
  },
  {
    title: "Product Development",
    description:
      "We provide outsourced product development services across all major industries, delivering high-quality, scalable solutions. Our expert team ensures your product meets market needs from concept to launch. Let us help you build innovative products that drive business growth..",
    icon: "https://cdn-icons-png.flaticon.com/512/7991/7991055.png",
  },
  {
    title: "AI Development",
    description:
      "We deliver cutting-edge AI development solutions tailored to your business needs. From machine learning models to intelligent automation, our expert team helps you harness AI to unlock new opportunities, boost efficiency, and drive innovation.",
    icon: "https://cdn-icons-png.flaticon.com/512/4149/4149678.png",
  },
  {
    title: "Testing",
    description:
      "We specialize in automating and refining testing strategies to ensure the highest quality standards for your products. Our thorough testing processes help identify and resolve issues early, delivering flawless performance across all platforms. Trust us to enhance your product's reliability and user experience.",
    icon: "https://cdn-icons-png.flaticon.com/512/6403/6403868.png",
  },
  {
    title: "UI/UX Design",
    description:
      "Our UI/UX design services focus on creating intuitive and engaging user experiences. We design wireframes, prototypes, and interfaces that align with your brand and improve usability, ensuring a seamless experience across all devices.",
    icon: "https://cdn-icons-png.flaticon.com/512/13191/13191281.png",
  },
];

const Services = () => {
  return (
    <Container
      className="services-section my-5 pt-5"
      style={{ position: "relative", zIndex: 0 }}
    >
      <ParticlesBackground />

      <Row className="mb-5">
        <h3
          className="text-center text-primary mb-3 mt-5"
          style={{ fontWeight: "bold" }}
        >
          Our Services
        </h3>
        {servicesData.map((service, index) => (
          <Col key={index} lg={4} md={6} sm={6} xs={12} className="mb-5">
            <Card
              className="text-center h-100 shadow-sm service-card"
              // onClick={() => handleCardClick(service)}
              style={{ cursor: "pointer" }}
            >
              <Card.Body>
                <img
                  src={service.icon}
                  alt={service.title}
                  width="60"
                  className="mb-3"
                />
                <Card.Title
                  style={{
                    fontWeight: "bold",
                    fontFamily: "'Roboto', sans-serif",
                  }}
                >
                  {service.title}
                </Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
