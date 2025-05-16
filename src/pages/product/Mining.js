import React, { useState } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./Product.css";
import erp1 from "../../assets/product/erp1.jpg";
import erp2 from "../../assets/product/erp2.jpg";
import erp4 from "../../assets/product/erp6.jpg";
import {
  FcBiohazard,
  FcCollect,
  FcMindMap,
  FcBullish,
  FcMoneyTransfer,
  FcSurvey,
  FcEngineering,
  FcPlus,
  FcPositiveDynamic,
  FcFeedback,
} from "react-icons/fc";
import ParticlesBackground from "../Animation/ParticlesBackground";

const features = [
  {
    icon: <FcCollect size={36} />,
    title: "Mine Operations Management",
    description:
      "Our Mine Operations Management module provides an end‑to‑end digital workflow for every stage of material extraction and processing:\n\n" +
      "• Integrated Workflows: All site activities—drilling, blasting, loading, hauling, crushing—are orchestrated via a unified interface. You define your mine plan, and the system automatically generates shift‑wise work orders and dispatch instructions for each fleet.\n" +
      "• Real‑Time Telemetry: Equipment telematics (GPS location, load weight, cycle times) feed directly into dashboards. Supervisors see live maps of haul trucks, shovel productivity charts, and crusher throughput rates—enabling immediate corrective actions if a truck is idling or a crusher is underperforming.\n" +
      "• Dynamic Scheduling: Based on real‑time performance and stockpile levels, the module recalculates priorities—redirecting trucks from one pit to another or staggering crusher feeds to avoid bottlenecks. Automated alerts inform dispatchers when a process step falls behind.\n" +
      "• KPI Analytics: Pre‑configured and customizable KPIs—tonnes per man‑hour, equipment utilization, dig‑to‑dump cycle times—are displayed in drill‑down reports. Managers can compare shifts, crews, or machine models to identify high‑performers and coach laggards.\n" +
      "• Mobile Operator App: Operators receive digital shift cards on their tablets, log cycle completions with a tap, and report delays (breakdowns, traffic) instantly. This replaces paper logbooks and ensures 100% compliance with site procedures.\n\n" +
      "Impact: Improved fleet utilization by up to 15%, reduced idle time, smoother production hand‑offs,and a single source of truth for all on‑site operations.",
  },
  {
    icon: <FcEngineering size={36} />,
    title: "Maintenance & Asset Management",
    description:
      "This module transforms maintenance from reactive firefighting into proactive asset care:\n\n" +
      "• Preventive Maintenance Scheduling:  Create maintenance calendars based on engine hours, load counts, or calendar intervals. The system auto‑generates work orders before critical thresholds are reached, ensuring filters, fluids, belts, and other wear items are serviced on time.\n" +
      "• Predictive Analytics:  By ingesting sensor data (vibration spectra, oil‑analysis results, temperature logs), machine learning models predict bearing wear or hydraulic leaks days before failure. Maintenance teams receive prioritized work lists, reducing unplanned downtime.\n" +
      "• Spare‑Parts Inventory Control:  Each work order reserves required parts. The module tracks current stock levels, triggers auto‑reorders at replenishment points, and prevents emergency parts shortages that lead to extended breakdowns.\n" +
      "• Mobile Field Tools: Technicians use a mobile app to view job instructions, record labor hours, capture before/after photos, and close work orders on the spot. All records update the asset’s service history automatically.\n" +
      "• Cost Tracking: Maintenance costs (labor, parts, external services) are captured per work order and rolled up into asset‑level cost reports. You can calculate true life‑cycle costs and optimize replacement timing.\n\n" +
      "Impact: Typically reduces breakdowns by 40%, extends asset life by 20%, and cuts emergency repair costs by half.",
  },
  {
    icon: <FcBiohazard size={36} />,
    title: "Environmental & Compliance Management",
    description:
      "Centralize all environmental permitting, monitoring, and compliance:\n\n" +
      "• Permit Repository: Digitally store all permits (air, water, land‑use) with metadata (expiry dates, conditions). Automated reminders alert the compliance team 90/60/30 days before renewal deadlines.\n" +
      "• Emissions & Discharge Tracking: Integrate with on‑site sensors and third‑party lab data to record pollutant levels, wastewater discharge volumes, and particulate measurements. Data feeds into time‑series dashboards to spot excursions above permissible limits.\n" +
      "• Incident & Deviation Logging: Any non‑compliance event—fuel spill, dust exceedance—is logged with photos, responsible party, corrective action plans, and follow‑up verification. This creates a complete audit trail.\n" +
      "• Regulatory Reporting Automation:  Pre‑built report templates (e.g., EIA, NPI, DMR) can be populated automatically with the recorded data. You export ready‑to‑submit PDFs, reducing manual data entry errors.\n" +
      "• ESG Dashboard: enior management views consolidated sustainability KPIs (GHG emissions, water intensity, land rehabilitation metrics). This supports corporate ESG reporting to investors and community stakeholders.\n\n" +
      "Impact: Minimizes risk of regulatory fines, improves community relations, and provides a clear path to achieve sustainability targets.",
  },
  {
    icon: <FcMindMap size={36} />,
    title: "Supply Chain & Logistics",
    description:
      "Optimize the flow of materials from pit to port with end‑to‑end logistics visibility:\n" +
      "• Vendor & Contract Management: Maintain a centralized database of haulage contractors, their equipment, contractual rates, and performance metrics. Automated scorecards evaluate on‑time deliveries and equipment reliability\n" +
      "• Route Optimization Engine: Using live GPS feeds and haul road conditions, the system recommends the most cost‑effective routes for each truck, balancing payload, fuel efficiency, and turnaround times.\n" +
      "• Inventory Staging & Yard Management: Manage multiple stockpiles and blending yards—track inbound ore grades and material transfers. Real‑time stock levels prevent unexpected stockouts or overflows.\n" +
      "• Dispatch Planning:  Dispatchers receive automated shift rosters and truck assignments. When a load is ready, the next available truck is notified via mobile alert, ensuring minimal wait times. \n" +
      "• Analytics & Cost Control: Logistics‑specific KPIs—tonne‑kilometers per liter, empty‑return ratios, demurrage costs—are analyzed in dashboards. This uncovers waste in transport and helps renegotiate vendor contracts.\n\n" +
      "Impact: Reduces logistics costs by 10–20%, improves on‑time delivery rates to plant, and enhances transparency across remote sites.",
  },
  {
    icon: <FcPlus size={36} />,
    title: "Health, Safety & Risk Management",
    description:
      " Embed safety throughout operations with a unified EHS platform:\n" +
      "• Incident Reporting & Investigation: Workers report incidents or near‑misses via mobile forms—complete with geotags and photos. Automated workflows assign investigators, schedule root‑cause analysis meetings, and track corrective actions to closure.\n" +
      "• Hazard & Risk Assessments: Pre‑built assessment templates (e.g., JSA, HAZOP) guide teams through step‑by‑step hazard identification. The system stores risk scores and recommends control measures.\n" +
      "• Training & Certification Tracking: Track expiration dates for mandatory certifications (e.g., first aid, firewatch). Automated reminders prompt refresher courses well before expiry.\n" +
      "• Safety Audits & Inspections: Schedule periodic site audits, generate checklists, and capture findings digitally. Audit dashboards highlight compliance gaps and overdue inspections.\n" +
      "• EHS Performance Dashboard: Consolidates leading (training completion, near‑miss reports) and lagging indicators (recordable injuries, lost‑time incidents) so leadership can see safety trends and allocate resources proactively.\n\n" +
      "Impact: Enhances safety culture, lowers incident rates by up to 30%, and demonstrates continuous improvement to regulators and insurers.",
  },
  {
    icon: <FcBullish size={36} />,
    title: "Project Planning & Capital Management",
    description:
      "• Integrated Gantt Scheduling: Define project phases (exploration, construction, commissioning) in a dynamic Gantt chart. Link tasks to equipment, crews, and budget items. Changes in one area automatically ripple through the plan.\n" +
      "•Resource Leveling & Allocation: The module balances resource demands—avoiding over‑allocation of crews or equipment. You can model “what‑if” scenarios (e.g., adding an extra drill rig) to see impact on timelines.\n" +
      "• Budget Baseline & Change Management: Establish cost baselines and track actual vs. forecast spending in real time. When scope changes occur, change requests are logged, approved workflows trigger, and updated budgets roll into forecasts.\n" +
      "• Capital Expenditure Approval: Automated workflows route CAPEX proposals through multi‑level approval chains, capturing digital sign‑offs and audit trails.\n" +
      "• Performance Metrics: Earned value analysis (EVA) and other project metrics update automatically, providing early warnings of cost or schedule overruns.\n" +
      "Impact: Increases on‑time project delivery by 25%, reduces budget overruns, and improves stakeholder confidence through transparent reporting.",
  },
  {
    icon: <FcSurvey size={36} />,
    title: "Human Capital Management",
    description:
      " Manage your complex, multi‑tier mining workforce with a single HCM suite:\n\n" +
      "• Recruitment & Onboarding: Automate job posting, applicant tracking, and e‑boarding. New hires complete forms, policy acknowledgments, and safety training digitally before day one.\n" +
      "• Shift Rostering & Timekeeping: Define rotating, fixed, or fly‑in/fly‑out shift patterns. Employees log hours via biometric/GPS‑enabled mobile clocks. The system ensures compliance with working‑hours regulations.\n" +
      "• Skills & Certification Registry: Maintain a database of employee qualifications, license expiry dates, and medical clearances. Notifications ensure no one works without valid certification.\n" +
      "• Performance Appraisals & Succession Planning: Conduct annual reviews, set development goals, and map talent pipelines—all within the ERP.\n" +
      "• MPayroll Integration: Automatically calculate wages, allowances, overtime, and deductions. Integrated with local tax and social security regulations for accurate payslips and statutory reporting.\n\n" +
      "Impact: Reduces payroll errors by 90%, ensures 100% certification compliance, and shortens time‑to‑competency for new hires.",
  },
  {
    icon: <FcMoneyTransfer size={36} />,
    title: "Financial Management & Cost Control",
    description:
      "Tie together operational and financial data for real‑time fiscal governance:\n\n" +
      "• Integrated Workflows: All site activities—drilling, blasting, loading, hauling, crushing—are orchestrated via a unified interface. The system generates shift‑wise work orders and dispatch instructions.\n" +
      "• General Ledger & Multi‑Entity Consol: Manage multiple legal entities or joint ventures in one chart of accounts. Automated consolidation and intercompany eliminations save month‑end close time.\n" +
      "• Cost Center & Job Costing: Assign every expense or revenue transaction to specific cost centers (mine pit, project phase) for detailed profitability analysis.\n" +
      "• Budgets & Forecasting: Set annual or rolling budgets at any granularity. Forecasting models update with actuals and “what‑if” assumptions.\n" +
      "• Accounts Payable & Receivable: Automate vendor invoice matching, approvals, and payment scheduling. Track receivables against buyers or logistics providers with aging analysis.\n" +
      "• Financial Dashboards & Compliance: Pre‑built dashboards show cash flow, working capital ratios, and debt covenants. Regulatory reporting templates (IFRS, US GAAP) can be generated on demand.\n\n" +
      "Impact: Accelerates financial close by 50%, improves working capital visibility, and enables data‑driven investment decisions.",
  },
  {
    icon: <FcPositiveDynamic size={36} />,
    title: "Geospatial & Survey Data Integration",
    description:
      " Merge spatial intelligence with operational planning for precise mine design:\n\n" +
      "•GIS Data Import & Overlay: Import shapefiles, CAD drawings, and drone survey outputs directly into the ERP. Overlay pit limits, waste dumps, and infrastructure layers on your production map.\n" +
      "• R3D Visualizations: View drill‑hole data, topography models, and reserve estimations in an interactive 3D viewer. Geologists, engineers, and planners collaborate in a shared digital environment.\n" +
      "• Cut‑Off & Reserve Calculations: Use integrated algorithms to define economic cut‑offs and compute ore/waste tonnages automatically as designs evolve.\n" +
      "• Route & Pit Optimization: Evaluate multiple haul‑road alignments against grade profiles and distance metrics to minimize transport costs.\n" +
      "•Survey Data Version Control: Track revisions of survey maps and designs. Easily revert to previous versions or compare differences layer by layer.\n\n" +
      "Impact: Reduces design-to‑production cycle by 30%, increases reserve confidence, and improves cross‑disciplinary collaboration.",
  },
  {
    icon: <FcFeedback size={36} />,
    title: " Mining Compliance & Audit",
    description:
      " Ensure every site remains audit‑ready across safety, environmental, and financial domains:\n\n" +
      "• Audit Scheduling & Checklist Management: Configure recurring audits (safety, environmental, financial) with custom checklists. Automated reminders and task assignments keep auditors on schedule.\n" +
      "• Evidence Collection & Documentation: Auditors use a mobile app to capture photos, sign‑offs, and notes on the spot. All evidence links directly to specific checklist items.\n" +
      "• Non‑Conformance & CAPA Tracking: Log non‑conformances, assign corrective and preventive actions (CAPAs), and set due dates. The system tracks overdue items and escalates as needed.\n" +
      "• Regulatory Standards Library: Maintain a built‑in repository of ISO, local mining codes, and internal policies. Auditors can reference the exact clause during inspections.\n" +
      "• Executive Compliance Dashboard: Consolidate audit findings, CAPA closure rates, and compliance KPIs in one dashboard—providing leadership with a real‑time health check on organizational compliance.\n\n" +
      "Impact: Cuts audit preparation time by 70%, ensures rapid CAPA closure, and demonstrates continuous compliance improvement to regulators and investors.",
  },
];

function Mining() {
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
            MINING ERP ORACLE
          </h2>
          <p className="text-center text-muted fs-5 zoom-in">
            Swostitech MINERX – Complete ERP Solution for Mining Operations
          </p>
        </Col>
      </Row>
      <Row className="align-items-justify mt-5">
        <Col lg={6} md={12} sm={12} xs={12} className="mb-5">
          <Image
            src={erp1}
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
          {/* <h4 className="fw-bold mb-3">
            Comprehensive Mining ERP Modules – Detailed Problem & Solution
            Overview
          </h4> */}
          <h4 className="fw-bold mb-3 zoom-in">
            Transform Mining Operations with Oracle-Powered ERP
          </h4>

          <p className="zoom-in">
            Explore detailed solutions for Mine Operations, Maintenance,
            Environmental Compliance, Logistics, EHS, Project Planning, HCM,
            Finance, GIS Integration, and Audit in our Mining ERP. Optimize
            productivity, safety, and compliance.
          </p>

          <ul className="fade-up custom-list">
            <li>Mine Operations Management</li>
            <li>Maintenance & Asset Management</li>
            <li>Environmental & Compliance Management</li>
            <li>Supply Chain & Logistics</li>
            <li>Health, Safety & Risk Management</li>
            <li>Project Planning & Capital Management</li>
            <li>Financial Management & Cost Contro</li>
            <li>Geospatial & Survey Data Integration</li>
            <li>Mining Compliance & Audit</li>
          </ul>
        </Col>
      </Row>

      <Row className="g-4 mb-5 mt-3 ">
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
            Digitizing Mines with Swostitech’s Intelligent ERP Platform
          </h4>

          <p className="zoom-in">
            Swostitech’s Intelligent ERP Platform is designed to transform
            traditional mining operations into digitally driven, data-smart
            ecosystems. It unifies all essential processes—like operations
            management, asset maintenance, EHS compliance, finance, logistics,
            and geospatial data—into one centralized system. With real-time
            monitoring, predictive maintenance, and integrated project planning,
            mining businesses can boost efficiency, reduce downtime, and ensure
            safety and regulatory compliance at every step. Whether managing
            on-site equipment or tracking audit trails, Swostitech empowers
            mining companies to make informed decisions and scale with
            confidence in a competitive, high-risk industry.
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
              className="img-grid-main "
              alt="Our company vision"
            />
            <img
              src={erp4}
              className="img-grid-secondary zoom-in-image"
              alt="Our team"
            />
            <img
              src={erp1}
              className="img-grid-tertiary zoom-in-image"
              alt="Our workspace"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Mining;
