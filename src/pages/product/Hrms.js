import React, { useState } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./Product.css";
import hrms from "../../assets/product/hrms.jpg";
import hrms1 from "../../assets/product/hrms6.png";
import hrms2 from "../../assets/product/hrms1.jpg";
import hrms3 from "../../assets/product/hrms3.jpg";
import {
  FcCalendar,
  FcLeave,
  FcWorkflow,
  FcBusinessman,
  FcMoneyTransfer,
  FcDebt,
} from "react-icons/fc";
import ParticlesBackground from "../Animation/ParticlesBackground";

const features = [
  {
    icon: <FcWorkflow />,
    title: "Dashboard – Real-Time HR Insights",
    description:
      "The Swostitech Dashboard is a visual command center that displays real-time analytics and key metrics – from total headcount and attendance rates to upcoming leaves, birthdays or payroll summaries. With configurable widgets and color-coded charts, the dashboard gives executives and HR professionals an instant snapshot of company-wide operations.\nKey Features:\nUnified Analytics: Consolidate data (attendance, leave, payroll, etc.) into one view.\nCustomizable Widgets: Add charts for headcount, recruitment, awards, notices, etc.\nVisual Alerts: Highlight anomalies like absenteeism spikes or overtime trends",
  },
  {
    icon: <FcBusinessman />,
    title: "Employee Management – Centralized Personnel Database",
    description:
      "The Employee Management module acts as a centralized hub for all staff information including background, qualifications, contact details, bank info, salary history and more. It supports self-service access for employees to update their own data, download payslips, and upload documents.\nKey Features:\nPersonal Profiles: Store and access complete employee history.\nOrganizational Hierarchy: Assign employees to roles and departments.\nOnboarding & Offboarding: Digitized process for quick hiring or exits.\nEmployee Self-Service Portal: Reduces HR workload and improves transparency.",
  },
  {
    icon: <FcLeave />,
    title: "Leave Management – Streamlined Time-Off Policies",
    description:
      "The Leave Management module automates the entire leave process, from application to approval. It supports all leave types and tracks entitlements, carryovers, and balances.\nKey Features:\nCentralized Calendar:Company holidays and leave in one view.\nMulti-Level Approvals: Route requests through relevant supervisors.\nBalance Tracking: Live leave balances visible to both HR and staff.\nPolicy Customization: Set rules based on location, seniority, and labor laws.",
  },
  {
    icon: <FcCalendar />,
    title: "Attendance Tracking & Regularization",
    description:
      "Our Attendance module tracks in/out times using biometric devices, QR code, GPS, or mobile/web check-in. It automatically records data, flags anomalies, and integrates with payroll for accurate wage calculations.\nKey Features:\nMulti-Modal Capture: Biometric, RFID, mobile GPS, QR scan.\nReal-Time Logs: Daily attendance records by department or shift.\nRegularization Requests: Employees can submit correction requests for missed punches.\nOvertime Calculation: Tracks extra hours for payment or compensatory leave.",
  },
  {
    icon: <FcDebt />,
    title: "Payroll Processing – Automated Salary & Compliance",
    description:
      "Swostitech’s Payroll module calculates salaries based on attendance, leave, overtime, taxes, and other parameters. It automates payslip generation and compliance reporting.\nKey Features:\nTax & Compliance: Auto-deductions for TDS, PF, ESIC, etc.\nIntegrated Data: Attendance and leaves feed directly into salary calculations.\nBulk Processing: Generate multiple payslips instantly.\nMulti-Currency Support: Suitable for international teams.",
  },
  {
    icon: <FcMoneyTransfer />,
    title: "Reimbursement & Expense Management",
    description:
      "The Expense module simplifies employee reimbursements. Employees can upload receipts via mobile, and approved expenses are automatically added to payroll.\nKey Features:\nReceipt Upload: Use mobile app or portal with photo attachments.\nPolicy Enforcement: Set limits, categories, and approval flows.\nIntegrated Payout: Approved claims sync with salary disbursement.\nAnalytics: Track and control organizational spending.",
  },
];

function Hrms() {
  const [showFull, setShowFull] = useState(() =>
    Array(features.length).fill(false)
  );

  const toggleShow = (i) => {
    const updated = [...showFull];
    updated[i] = !updated[i];
    setShowFull(updated);
  };
  return (
    <Container className="my-5 pt-5">
      <ParticlesBackground />
      <Row className="mb-4">
        <Col>
          <h2 className="text-center fw-bold text-dark fade-up">
            Elevate Your HR Team with Swostitech HRMS
          </h2>
          <p className="text-center text-muted fs-5 zoom-in">
            Transforms your daily HR workflows, keeping you ahead in every task.
          </p>
        </Col>
      </Row>
      <Row className="align-items-justify mt-5">
        <Col lg={6} md={12} sm={6} xs={12} className="mb-5">
          <Image
            src={hrms1}
            alt="HRMS"
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

        <Col lg={6} md={12} sm={6} xs={12} className="mb-3">
          <h4 className="fw-bold mb-3">
            Swostitech HRMS – All-in-One HR & Payroll Automation Software
          </h4>

          <p className="zoom-in">
            Swostitech’s HRMS software is a comprehensive human resource
            management solution built for SMEs, enterprises, startups and
            manufacturing firms. It combines HR automation, payroll processing,
            attendance tracking, leave management and more into one friendly,
            intuitive platform. From a customizable dashboard to mobile
            attendance and biometric integration, every module is designed to
            save time, boost accuracy and enhance productivity. Swostitech HRMS
            empowers managers and employees alike with data-driven insights and
            self-service tools – so everyone can focus on strategic work instead
            of paperwork.
          </p>

          <ul className="fade-up custom-list">
            <li>Self-Employee Management </li>
            <li>Attendance Tracking & Regularization</li>
            <li>Leave Management</li>
            <li>Payroll Processing</li>
            <li>Reimbursement & Expense Management</li>
            <li>Shift Scheduling </li>
            <li>Department & Role Management </li>
            <li>Holiday Calendar </li>
          </ul>
        </Col>
      </Row>
      {/* Feature Cards */}
      {/* <Row className="g-4 mb-5 ">
        {features.map((item, index) => (
          <Col md={4} key={index}>
            <Card className="hrms-card h-100 text-center p-3">
              <div
                className="mx-auto mb-5 rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#ccc",
                  fontSize: "24px",
                }}
              >
                {item.icon}
              </div>
              <Card.Body>
                <h5>
                  <strong>{item.title}</strong>
                </h5>
               
                <Card.Text className="fade-up text-start">
                  {item.description.split("\n").map((line, idx) => {
                    if (line.trim() === "Key Features:") {
                      return (
                        <strong key={idx} className="d-block mt-2 mb-2 ">
                          Key Features:
                        </strong>
                      );
                    } else if (line.includes(":")) {
                      return (
                        <div key={idx} className="custom-list-item">
                          {line}
                        </div>
                      );
                    } else {
                      return <p key={idx}>{line}</p>;
                    }
                  })}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}

      <Row className="g-4 mb-5 mt-3 ">
        {features.map((item, index) => (
          <Col lg={4} md={6} sm={12} xs={12} key={index}>
            <Card className="hrms-card h-100 text-center p-3">
              <div
                className="mx-auto mb-5 rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#ccc",
                  fontSize: "24px",
                }}
              >
                {item.icon}
              </div>
              <Card.Body>
                <h5>
                  <strong>{item.title}</strong>
                </h5>
                <Card.Text className="fade-up text-start">
                  {showFull[index] ? (
                    <>
                      {item.description.split("\n").map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                      <span
                        onClick={() => toggleShow(index)}
                        style={{ cursor: "pointer", color: "#F348B9" }}
                      >
                        Read less
                      </span>
                    </>
                  ) : (
                    <>
                      <p>{item.description.substring(0, 100)}...</p>
                      <span
                        onClick={() => toggleShow(index)}
                        style={{ cursor: "pointer", color: "#F348B9" }}
                      >
                        Read more
                      </span>
                    </>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="align-items-justify">
        <Col lg={6} md={12} sm={12} xs={12} className="mb-5">
          <h4 className="mb-3 flip-up">
            Swostitech HRMS – Simplifying Workforce Management
          </h4>
          <p className="zoom-in">
            Swostitech HRMS is an all-in-one solution that centralizes and
            automates every aspect of human resource and payroll operations.
            From attendance tracking and leave management to payroll processing
            and reimbursement, it streamlines day-to-day HR tasks. With
            self-service access, real-time dashboards, and mobile support, it
            empowers both HR teams and employees to manage their
            responsibilities more efficiently and accurately.
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
              src={hrms}
              className="img-grid-main"
              alt="Our company vision"
            />
            <img
              src={hrms3}
              className="img-grid-secondary zoom-in-image"
              alt="Our team"
            />
            <img
              src={hrms2}
              className="img-grid-tertiary zoom-in-image"
              alt="Our workspace"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hrms;
