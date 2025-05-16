import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import about from "../assets/about1.jpg";
import about3 from "../assets/about3.jpg";
import ParticlesBackground from "./Animation/ParticlesBackground";
import "./Style.css";

const About = () => {
  return (
    <Container className="my-5 pt-5">
      <ParticlesBackground />
      <h3 className="text-primary text-center fw-bold">About Swostitech</h3>
      <Row className="mt-3 py-5">
        <Col lg={6} md={12} sm={12} xs={12}>
          <Image src={about3} fluid className="zoom-in-image mb-3" />
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <p className="fade-up">
            For Swostitech Solutions, success is defined by translating
            innovative ideas into reality with the assistance of our tech
            experts. Guided by our vision of 'Technology for a Better Quality of
            Life,' we have aimed to become a leading IT company in the industry
            by delivering diverse solutions
          </p>
          <p className="fade-up ">
            We specialize in next-gen connected planning and technology
            solutions and help our customers align their business performance
            with corporate strategy by integrating all aspects of finance,
            supply chain, sales performance, and human resources management.
          </p>
          <p className="zoom-in mb-3">
            At Swostitech, we go beyond code. We focus on understanding your
            business, challenging assumptions, and designing solutions that are
            not only technically sound but also strategically aligned with your
            long-term goals.
          </p>
        </Col>
      </Row>

      {/* Section 2: Text Left, Image Right */}
      <Row className="py-5">
        <Col lg={6} md={12} sm={12} xs={12}>
          <p className="zoom-in">
            As a software company, we deeply comprehend that our clients require
            a comprehensive approach to project delivery. Hence, we offer
            full-cycle software development services and a broad spectrum of
            software competencies. We possess expertise in custom software and
            excel in both back-end and front-end development. We assist our
            clients in quality assurance, embedded solutions, cloud
            technologies, security, machine learning, and business intelligence.
          </p>
          <p className="zoom-in">
            Whether you're a startup looking to launch your first product or an
            enterprise needing to digitally transform your operations,
            Swostitech delivers innovation with purpose — enabling you to adapt,
            grow, and lead in an ever-evolving digital world.
          </p>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12} >
          <Image src={about} fluid className="flip-up-image" />
        </Col>
      </Row>

      {/* Section 3: Full Text Only */}
      <Row className="py-5">
        <Col lg={12} md={12} sm={12} xs={12}>
          <h3
            className="text-center text-primary"
            style={{ fontWeight: "bold" }}
          >
            Our Team
          </h3>
          <p className="zoom-in">
            We're a group of tech enthusiasts focused on solving business
            challenges with software solutions. The Swostitech team is
            significantly more productive and submits higher-quality
            deliverables in less time. Add value to your project with us. That's
            the reason why we always delve deeper, challenge initial
            assumptions, and look for new paths until we find a solution that
            provides you with real value.
          </p>
          <p className="fade-up">
            At Swostitech, our corporate team forms the strategic backbone of
            our organization. We are a dedicated group of professionals with a
            shared mission — to drive innovation, deliver measurable results,
            and build long-term value for our clients. Our team brings together
            expertise across software engineering, business analysis, project
            management, and customer success.
          </p>
          <p className="fade-up">
            We don’t just write code — we solve real-world problems. Through
            collaboration, agility, and a commitment to excellence, our
            corporate team ensures every project aligns with your business goals
            and exceeds expectations.
          </p>
          <p>
            Driven by values of integrity, transparency, and continuous
            improvement, the Swostitech corporate team is your trusted partner
            in digital transformation.
          </p>
        </Col>
      </Row>

      {/* Section 4: 4-column layout - Vision and Mission in center */}
      <Row className="py-5 text-center">
        <Col lg={2} md={2} style={{ backgroundColor: "#ccc" }}></Col>

        <Col lg={4} md={12} style={{ backgroundColor: "#fff3cd" }}>
          <h4 style={{ fontWeight: "bold", padding: "20px" }}>Our Vision</h4>
          <p>
            “Our mission is to deliver integrated, AI‑driven enterprise
            solutions—including ERP, HRMS, Legal AI, Oracle ERP for mining and
            utilities, and home‑care service software—that streamline
            operations, ensure compliance, and drive sustainable growth.”
          </p>
          <p>
            “We empower organizations with data‑driven insights, intuitive
            interfaces, and dedicated support to focus on their core objectives
            with integrity and innovation.”
          </p>
        </Col>
        <Col lg={4} md={12} style={{ backgroundColor: "#ccc" }}>
          <h4 style={{ fontWeight: "bold", padding: "20px" }}>Our Mission</h4>
          <p>
            “Our vision is to be the global leader in intelligent management
            ecosystems, dissolving administrative complexity across industries
            and fostering seamless collaboration through ethical AI and
            human‑centered design.”
          </p>
          <p>
            “We aspire to set new standards for digital transformation and user
            experience, enabling every organization to unlock boundless
            productivity and positive impact.”
          </p>
        </Col>
        <Col md={2} style={{ backgroundColor: "#fff3cd" }}></Col>
      </Row>
    </Container>
  );
};

export default About;
