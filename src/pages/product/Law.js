import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./Product.css";
import {
  FcPositiveDynamic,
  FcAssistant,
  FcWorkflow,
  FcOpenedFolder,
  FcDoughnutChart,
  FcExternal,
  FcVoicePresentation,
  FcRules,
  FcLibrary,
  FcContacts,
  FcBusinessman,
  FcBusinessContact,
} from "react-icons/fc";
import nyay from "../../assets/product/nyay3.png";
import large from "../../assets/product/nyay5.jpg";
import small from "../../assets/product/nyay1.jpg";
import medium from "../../assets/product/nyay4.jpg";
import ParticlesBackground from "../Animation/ParticlesBackground";

const features = [
  {
    icon: <FcPositiveDynamic />,
    title: "Dashboard – Centralized Legal Control Panel",
    description:
      "The Nyay Dashboard serves as your legal command center. It offers a comprehensive view of ongoing cases, team performance, upcoming court dates, and important deadlines. This centralized interface helps law firms and legal departments manage their daily activities efficiently, reducing oversight and increasing clarity.\nKey Features:\nReal-time updates on case progress\nTask management and activity logs\nQuick summaries of key legal metrics",
  },
  {
    icon: <FcOpenedFolder />,
    title: " Case Management – Streamlined Legal Case Tracking",
    description:
      "Nyay's Case Management module allows you to seamlessly manage every aspect of your legal matters. Whether you handle litigation, corporate advisory, or compliance, this tool enables complete case lifecycle management with secure file storage, deadlines, and structured updates.\nKey Features:\nAdd and categorize new cases with ease\nAssign lawyers, set reminders, and track hearings\nMaintain digital records, documents, and internal notes",
  },
  {
    icon: <FcExternal />,
    title: "Legal Assistant – AI-Powered Legal Drafting & Research",
    description:
      "This intelligent assistant is trained specifically for legal work. From generating petitions and contracts to conducting legal research and summarizing documents, it supports lawyers, in-house counsels, and solo practitioners by saving time and boosting productivity.\nCapabilities:\nDraft legal documents with high accuracy\nAnswer complex legal queries\nSummarize judgments and case files instantly",
  },
  {
    icon: <FcDoughnutChart />,
    title: "Legal Lens Analyzer – Smart Legal Document Review",
    description:
      "Legal Lens Analyzer is designed to read, interpret, and analyze contracts, notices, and other legal documents. It highlights key terms, potential risks, missing clauses, and compliance gaps, making it an ideal tool for reviewing agreements efficiently.\nKey Features:\nClause-by-clause review and interpretation\nDetection of missing legal provisions\nRisk and compliance flagging for faster decision-making",
  },
  {
    icon: <FcLibrary />,
    title: "Legal Library – AI-Indexed Legal Knowledge Base",
    description:
      "Nyay’s Legal Library is an intelligent database containing case laws, statutes, legal articles, and custom firm documents. It is continuously updated and indexed using AI for fast and relevant search results, enabling lawyers to access accurate information without manual digging.\nBenefits:\nCentralized access to legal references\nAI-powered search and categorization\nHelps ensure legal accuracy in drafting and argumentation",
  },
  {
    icon: <FcRules />,
    title: "Contract Analysis – Intelligent Contract Review & Comparison",
    description:
      "Upload any contract, and the Contract Analysis module will review it thoroughly, detect discrepancies, and suggest changes. It assists in negotiating, vetting, and approving agreements, especially for HR, procurement, and legal departments.\nUse Cases:\nReview of vendor and employment contracts\nComparison of multiple versions\nHighlighting of obligations and risks",
  },
  {
    icon: <FcBusinessman />,
    title: "Lawyer Prediction – Data-Driven Lawyer Performance Insights",
    description:
      "This module evaluates lawyers based on past performance, domain expertise, and success rates, helping firms and corporate legal departments assign the right advocate or counsel to the right case.\nAdvantages:\nSmart lawyer profiling based on historical data\nPerformance analysis for internal and external lawyers\nInformed decision-making on lawyer allocation",
  },
  {
    icon: <FcWorkflow />,
    title: "Judgment Prediction – AI-Based Legal Outcome Forecasting",
    description:
      "Judgment Prediction uses legal data, case arguments, and judicial trends to estimate the likely outcome of a case. This helps clients and legal teams assess the strength of their case before proceeding.\nCapabilities:\nUpload case details to receive AI-generated predictions\nEvaluate case risks and possible outcomes\nSupports strategic legal decision-making",
  },
  {
    icon: <FcAssistant />,
    title: " Speech Transcription – Accurate Legal Transcripts",
    description:
      "This feature converts audio from client meetings, courtroom recordings, and interviews into text. The transcriptions are searchable, editable, and stored securely for future reference.\nKey Benefits:\nFast and accurate voice-to-text conversion\nEnables documentation of legal proceedings and consultations\nFacilitates better record-keeping and legal analysis",
  },
  {
    icon: <FcVoicePresentation />,
    title: " Add User – Scalable Team Management",
    description:
      "Nyay allows law firms and corporates to onboard multiple users and define their roles. Access permissions are strictly role-based, ensuring that sensitive information is securely managed.\nFeatures:\nAdd users like partners, associates, interns, or paralegals\nDefine admin, manager, and user roles\nSecurely manage access and responsibilities",
  },
  {
    icon: <FcContacts />,
    title: " Contact Us – Reliable Support and Consultation Access",
    description:
      "This section offers clients and prospects direct access to Nyay's support, onboarding, and sales teams. Whether you need a live demo or have technical questions, prompt assistance is just one click away.\nSupport Includes:\nProduct consultation and guided tours\nIntegration support and training\nTechnical troubleshooting and upgrades",
  },
  {
    icon: <FcBusinessContact />,
    title: "Login – Secure Access Based on Role",
    description:
      "Nyay features secure login pathways for admins, managers, and users. Each role has defined access privileges to ensure data security, confidentiality, and operational control.\nLogin Types:\nAdmin: Full platform control\nManager: Oversight of teams and cases\nUser: Task- or case-specific access",
  },
];

function Law() {
  return (
    <Container className="my-5 pt-5">
      <ParticlesBackground />
      <Row className="mb-4">
        <Col>
          <h2 className="text-center fw-bold text-dark fade-up">
            Nyay Legal AI – Secure, AI-Powered Legal Platform
          </h2>
          <p className="text-center text-muted fs-5 zoom-in">
            Simplify Your Legal Workflows - Stay Ahead with Every Case.
          </p>
        </Col>
      </Row>
      <Row className="align-items-justify mt-5">
        <Col lg={6} md={12} sm={12} xs={12} className="mb-5">
          <Image
            src={nyay}
            alt="nyay"
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

        <Col lg={6} md={12} sm={12} xs={12} className="mb-3">
          <h4 className="fw-bold mb-3 ">Why Choose Our Nyay Legal AI?</h4>

          <p className="zoom-in">
            Our Nyay Legal AI is designed for legal professionals to manage
            cases, clients, billing, and documents efficiently. Stay organized
            and reduce manual effort.
          </p>
          <p className="zoom-in">
            Nyay is designed to streamline the daily work of legal
            professionals. Using advanced, custom-built language models, it
            automates time-consuming legal tasks—like drafting documents and
            analyzing case outcomes. The result? You save time, work smarter,
            and focus more on delivering results and supporting your clients.
          </p>

          <ul className="fade-up custom-list">
            <li>Centralized Legal Control Panel</li>
            <li>Case Management & Tracking</li>
            <li>Legal Assistant</li>
            <li>Legal Lens Analyzer</li>
            <li>Legal Library</li>
            <li>Client & Contact Management</li>
            <li>Lawyer Prediction</li>
            <li>Judgment Prediction</li>
            <li>Speech Transcription</li>
            <li>Add User</li>
            <li>Contact Us</li>{" "}
          </ul>
        </Col>
      </Row>
      {/* Feature Cards */}
      <Row className="g-4 mb-5 mt-3">
        {features.map((item, index) => (
          <Col lg={4} md={6} sm={6} xs={12} key={index}>
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
                {/* <Card.Text style={{ whiteSpace: "pre-line" }}>
                  {item.description}
                </Card.Text> */}
                <Card.Text className="fade-up text-start">
                  {item.description.split("\n").map((line, idx) => {
                    const trimmed = line.trim();
                    if (
                      trimmed === "Key Features:" ||
                      trimmed === "Capabilities:" ||
                      trimmed === "Benefits:" ||
                      trimmed === "Use Cases:" ||
                      trimmed === "Advantages:" ||
                      trimmed === "Key Benefits:" ||
                      trimmed === "Features:" ||
                      trimmed === "Support Includes:" ||
                      trimmed === "Login Types:"
                    ) {
                      return (
                        <strong key={idx} className="d-block mt-2 mb-2">
                          {trimmed}
                        </strong>
                      );
                    } else {
                      return (
                        <div key={idx} className="custom-list-item">
                          {trimmed}
                        </div>
                      );
                    }
                  })}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="align-items-center">
        <Col lg={6} md={12} sm={12} xs={12} className="mb-5">
          <h4 className="mb-3 zoom-in">Efficient Case Tracking</h4>
          <p className="fade-up">
            Keep track of all your cases with detailed activity logs, important
            milestones, and real-time updates. Stay ahead with smart deadline
            tracking, automated reminders, and instant alerts to ensure you
            never miss critical dates, hearings, or client follow-ups. Organize
            documents, status reports, and case progress in one centralized
            dashboard—giving you full visibility and control over every case
            from start to finish.
          </p>
          <h4 className="mb-3 zoom-in">
            Nyay Legal AI – The Future of Smart Legal Practice
          </h4>
          <p className="fade-up">
            Nyay Legal AI is purpose-built to help legal professionals work
            smarter, faster, and with greater precision. Whether you're managing
            complex case files, drafting legal documents, or analyzing court
            outcomes, Nyay eliminates tedious manual work with the power of AI.
            It centralizes your legal operations, streamlines communication, and
            enables data-driven decisions—so you can focus on winning cases and
            serving clients better.
          </p>
        </Col>
        {/* <Col md={6} className="mb-5">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "auto",
            }}
          >
            <Image
              src={small}
              alt="Small Feature Image"
              fluid
              rounded
              style={{
                width: "80%",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "10%",
                width: "50%",
                height: "60%",
                borderRadius: "50%",
                border: "3px solid #fff",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                src={large}
                alt="Nested Small Image"
                fluid
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </Col> */}
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
              src={large}
              className="img-grid-main"
              alt="Our company vision"
            />
            <img
              src={medium}
              className="img-grid-secondary zoom-in-image"
              alt="Our team"
            />
            <img
              src={small}
              className="img-grid-tertiary zoom-in-image"
              alt="Our workspace"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Law;


