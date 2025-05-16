import React, { useState } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./Product.css";
import erp1 from "../../assets/product/erp1.jpg";
import erp2 from "../../assets/product/erp2.jpg";
import erp3 from "../../assets/product/erp3.jpg";
import erp4 from "../../assets/product/erp6.jpg";
import {
  FcBiohazard,
  FcCollect,
  FcMindMap,
  FcSettings,
  FcPackage,
  FcCurrencyExchange,
  FcOrgUnit,
  FcManager,
  FcVoicePresentation,
  FcGlobe,
  FcSelfServiceKiosk,
} from "react-icons/fc";
import ParticlesBackground from "../Animation/ParticlesBackground";

const features = [
  {
    icon: <FcOrgUnit size={36} />,
    title: "Generation & Load Management",
    description:
      "Problem:\n\n" +
      "Utilities lack a unified system to balance variable renewable inputs with traditional generation, leading to grid instability and inefficient dispatch.\n\n" +
      "Solution:\n" +
      "A Generation & Load Management module aggregates telemetry from power plants (thermal, hydro, solar, wind) and demand‑side data to create a dynamic supply‑demand balance. Advanced forecasting algorithms predict load curves using weather, historical consumption patterns, and market prices. Dispatch instructions are optimized in real time, automatically ramping generators or deploying storage to maintain frequency and voltage stability. A web‑based console displays live generation mix, reserve margins, and performance metrics—enabling operators to preemptively adjust resources and minimize spinning reserves costs.",
  },

  {
    icon: <FcMindMap size={36} />,
    title: "Transmission & Distribution Operations",
    description:
      "Problem:\n\n" +
      " Poor visibility into grid health leads to delayed outage detection, prolonged downtime, and costly manual inspections.\n\n" +
      "Solution:\n" +
      "Integrating SCADA and smart‑meter data, this module provides real‑time monitoring of transmission lines and distribution feeders. Automated fault detection triangulates sensor alerts to pinpoint outage locations. A GIS‑enabled dashboard overlays network topology, asset conditions, and maintenance schedules. Predictive analytics forecast transformer loading and line sag, prompting proactive infrastructure upgrades. Mobile field crews receive work orders and outage tickets on handheld devices, reducing mean time to repair and improving reliability indices.",
  },
  {
    icon: <FcSelfServiceKiosk size={36} />,
    title: "Billing & Customer Information System (CIS)",
    description:
      "Problem:\n\n" +
      "Complex tariffs, consumption‑based billing, and subsidy programs create reconciliation challenges and frequent billing disputes.\n\n" +
      "Solution:\n" +
      "A modern CIS centralizes customer profiles, meter data, and billing rules. It supports multi‑tiered rates, time‑of‑use pricing, dynamic tariffs, and subsidy pass‑throughs. Automated meter data acquisition ensures accurate consumption reads, while a rules engine generates bills, dunning letters, and payment reminders. Self‑service portals and IVR interfaces allow customers to view bills, pay online, and update preferences. Integration with ERP/CRM systems streamlines collections, dispute resolution, and regulatory reporting, reducing billing cycle times and improving cash flow predictability.",
  },
  {
    icon: <FcSettings size={36} />,
    title: "Asset Lifecycle Management",
    description:
      "Problem:\n\n" +
      "Aging infrastructure and reactive maintenance drive up repair costs and unplanned outages.\n\n" +
      "Solution:\n" +
      "This module tracks each asset—from substation transformers to distribution poles—through its entire lifecycle. Preventive maintenance schedules are generated based on runtime hours, load factors, and condition assessments. IoT sensors feed real‑time health data (temperature, vibration, oil quality) into a central CMMS, triggering predictive maintenance alerts. Mobile work orders allow technicians to record inspections, parts usage, and repairs on tablets. Analytics dashboards show asset health indices, total cost of ownership, and replacement forecasts—enabling capital planning and maximizing ROI on critical equipment.",
  },
  {
    icon: <FcBiohazard size={36} />,
    title: "Regulatory & ESG Compliance",
    description:
      "Problem:\n\n" +
      " Utilities face evolving environmental mandates—carbon caps, water usage limits, and social governance standards—that are hard to track manually.\n\n" +
      "Solution:\n" +
      "An ESG Compliance module consolidates emissions, water withdrawal, waste disposal, and community impact data into a single platform. Automated data ingestion from sensors and enterprise systems populates environmental key performance indicators. Rule‑based alerts flag breaches of permit conditions, while report templates export ready‑for‑submission disclosures. An executive ESG dashboard tracks sustainability goals, green energy procurement, and carbon offsets—helping utilities meet regulatory mandates and demonstrate corporate responsibility.",
  },
  {
    icon: <FcPackage size={36} />,
    title: "Procurement & Inventory Management",
    description:
      "Problem:\n\n" +
      " Manual procurement processes and untracked spare‑parts inventories lead to stockouts, emergency purchases, and budget overruns.\n\n" +
      "Solution:\n" +
      "This module automates the end‑to‑end procurement cycle—from requisition, vendor bidding, to PO issuance and invoice matching. It maintains multi‑location inventory records, with real‑time visibility of spare parts, consumables, and critical supplies. Reorder points and safety stock levels are calculated based on lead times and usage rates. Integration with asset work orders ensures parts are reserved before jobs start. Detailed spend analytics identify cost‑saving opportunities and support strategic sourcing decisions.",
  },
  {
    icon: <FcCurrencyExchange size={36} />,
    title: "Financial Management",
    description:
      "Problem:\n\n" +
      "Fragmented accounting systems prevent a consolidated view of capital projects, operational expenses, and regulatory financial reporting.\n\n" +
      "Solution:\n" +
      " A built‑in Financials module offers general ledger, accounts payable/receivable, and project accounting with utility‑specific extensions (rate case modeling, fuel cost recovery). Multi‑entity consolidations handle joint ventures and regulatory jurisdictions. Cost center tracking aligns expenses to generation plants, T&D regions, or customer segments. Automated regulatory reporting templates and real‑time budget vs. actual dashboards empower finance teams to manage working capital and support data‑driven tariff applications.",
  },
  {
    icon: <FcManager size={36} />,
    title: "Workforce & Contractor Management",
    description:
      "Problem:\n\n" +
      "Coordinating large field crews, union labor agreements, and third‑party contractors via spreadsheets causes scheduling conflicts and compliance risks.\n\n" +
      "Solution:\n" +
      "The Workforce module centralizes employee and contractor profiles, certifications, and shift patterns. Automated rostering enforces labor rules (rest periods, overtime limits). Mobile timekeeping via geo‑fenced clock‑in/out integrates with payroll. Contractor SLAs and performance metrics are tracked, enabling vendor scorecards. Integrated training management ensures all personnel maintain required safety and competency certifications, reducing non‑compliance incidents and improving workforce productivity.",
  },
  {
    icon: <FcGlobe size={36} />,
    title: "GIS & Asset Mapping Integration",
    description:
      "Problem:\n\n" +
      " Lack of spatial context for assets hinders disaster response planning and field service coordination.\n\n" +
      "Solution:\n" +
      " This module overlays asset registers, network diagrams, and outage reports on interactive maps. GIS layers show feeders, substations, customer clusters, and environmental constraints. Field crews access mapped work orders on mobile GIS apps, enabling offline data capture and route optimization. Planners can perform scenario modeling (flood zones, fire risk areas) to enhance resilience planning. Integration with outage management accelerates fault isolation and restoration workflows.",
  },
  {
    icon: <FcVoicePresentation size={36} />,
    title: "Customer Engagement & Feedback",
    description:
      "Problem:\n\n" +
      "Limited customer touchpoints and poor communication during outages or billing cycles result in dissatisfaction and high churn.\n\n" +
      "Solution:\n" +
      " A multi‑channel customer portal and mobile app provide self‑service access to bills, outage maps, service requests, and usage analytics. Automated outage notifications (SMS, email, IVR) keep customers informed. Feedback surveys post‑service capture satisfaction metrics and drive continuous improvement. Chatbots handle routine inquiries, freeing call center agents for complex issues. Real‑time dashboards track Net Promoter Scores and complaint resolution times—enhancing transparency and trust.",
  },
];

function PowerUtility() {
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
          <h2 className="text-center fw-bold text-dark">
            Power operations with orcale powerd by erp
          </h2>
          <p className="text-center text-muted fs-5">
            Streamlining Energy Management with Swostitech’s Smart ERP Suite
          </p>
        </Col>
      </Row>
      <Row className="align-items-justify mt-5">
        <Col lg={6} md={12} sm={12} xs={12} className="mb-5">
          <Image
            src={erp3}
            alt="erp"
            fluid
            className="flip-up-image"
            style={{
              width: "100%",
              height: "100%",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              border: "3px solid rgb(172, 179, 197)",
              borderRadius: "3%",
            }}
          />
        </Col>

        <Col lg={6} md={12} sm={12} xs={12} className="mb-3">
          <h4 className="fw-bold mb-3">
            Oracle ERP Solutions for the Power & Utilities Sector
          </h4>

          <p className="zoom-in">
            Swostitech’s ERP for the power sector, powered by Oracle, delivers a
            robust and scalable platform to manage complex energy operations
            with precision and control. From generation and distribution to
            asset maintenance and regulatory compliance, our ERP solution
            streamlines every workflow. With advanced analytics, real-time
            monitoring, and integrated modules for finance, HR, inventory, and
            project planning, power companies can ensure peak performance,
            reduce downtime, and meet evolving industry demands. Leverage
            Oracle's strength and Swostitech’s innovation to power your
            operations intelligently and efficiently.
          </p>

          <ul className="fade-up custom-list">
            <li>Real-Time Asset Monitoring </li>
            <li>End-to-End Project Management </li>
            <li>Environmental & Compliance Management</li>
            <li>Regulatory & Compliance Management</li>
            <li>Advanced Analytics & Forecasting</li>
            <li>Integrated Financials & HR –</li>
          </ul>
        </Col>
      </Row>

      <Row className="g-4 mb-5 mt-3">
        {features.map((item, index) => (
          <Col lg={4} md={6} sm={6} xs={12} key={index}>
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
            Empowering the Power Sector with Oracle ERP Solutions
          </h4>
          <p className="zoom-in">
            Oracle ERP Solutions revolutionize operations in the Power &
            Utilities sector by integrating core business processes—from finance
            and supply chain to asset management and regulatory compliance—into
            a unified platform. With real-time analytics, predictive
            maintenance, and automated workflows, utility providers can
            streamline operations, reduce downtime, and enhance service
            reliability. Cloud-based scalability ensures utilities can adapt
            quickly to regulatory changes, market demands, and the growing
            complexity of distributed energy resources.
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
              src={erp2}
              className="img-grid-main"
              alt="Our company vision"
            />
            <img
              src={erp1}
              className="img-grid-secondary zoom-in-image"
              alt="Our team"
            />
            <img
              src={erp4}
              className="img-grid-tertiary zoom-in-image"
              alt="Our workspace"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PowerUtility;
