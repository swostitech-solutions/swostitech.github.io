import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import blog from "../assets/blog/blog2.jpg";
import blog1 from "../assets/blog/blog4.jpg";
import blog2 from "../assets/blog/blog5.jpg";
import blog3 from "../assets/blog/blog6.jpg";
import "./Blog.css";
import ParticlesBackground from "./Animation/ParticlesBackground";
import { FaLongArrowAltRight } from "react-icons/fa";

const blogData = [
  {
    title:
      "Introducing Swostitech ERP 2.0: The Next Generation of Intelligent Enterprise Management",
    text: "Today, we are excited to announce the launch of Swostitech ERP 2.0, the most advanced iteration of our enterprise resource planning suite designed to meet the evolving needs of modern organizations. Built on a robust, cloud‑native architecture, ERP 2.0 delivers real‑time data analytics, AI‑powered forecasting, and intuitive dashboards that empower decision‑makers with actionable insights. New industry‑specific modules include dedicated Oracle ERP integrations for mining and utilities, seamless HomeCare service automation, and tighter integration with Swostitech HRMS and Legal AI platforms for end‑to‑end operational efficiency. For existing customers, ERP 2.0 offers a straightforward upgrade path, with automated data migration tools and 24/7 support to ensure a smooth transition. Ready to experience the future of enterprise management? Visit our product page to learn more and schedule your personalized demo today.",
    img: blog3,
    date: "July 13, 2021",
  },
  {
    title:
      "How to Quickly Configure Your Swostitech HRMS for Maximum Efficiency",
    text: "Getting started with Swostitech HRMS? A few smart setup steps can unlock powerful results—saving time, improving accuracy, and streamlining HR operations. 1. Set Up Company Details Head to Company Settings to enter: Your institution’s name Fiscal year Work hours, holidays, and departments This lays the foundation for every module to work in sync. 2. Define User Roles & Permissions Go to Access Control to: Assign roles (HR, Admin, Manager, etc.) Control who sees and does what This ensures security and keeps sensitive data safe. 3. Configure Attendance & Leave In Attendance & Leave Management: Set shift rules, leave types, and approval flows Enable real-time alerts for late entries or absences Custom workflows = less manual tracking, more compliance. 4. Link to Payroll Set up Payroll using: Salary structures and deduction rules Direct integration with attendance and leaves Automated payslip generation Fewer errors. Faster payroll cycles. 5. Use Dashboards for Insights Access the Reporting Dashboard to monitor: Attendance trends Leave balances Payroll summaries Make informed decisions with data at your fingertips. 🚀 Ready to Go? Download our full HRMS Configuration Guide with visuals for a smooth setup. Or contact our support team for a free walkthrough.",
    img: blog1,
    date: "May 18, 2021",
  },
  {
    title: "Top Legal AI Trends Shaping Law Firms in 2025",
    text: "AI is no longer optional in the legal industry—it's a game-changer. In 2025, law firms are rapidly adopting Legal AI to boost efficiency, reduce costs, and gain competitive advantage. Here are the top trends driving this transformation. 1. Smarter Document Review Legal AI is automating time-consuming tasks like document analysis, saving lawyers hours every week. According to the 2024 Future of Professionals Report by Thomson Reuters, AI tools can recover up to 4 hours weekly, translating to hundreds of billable hours annually. 2. AI-Powered Contract Analysis Firms are leveraging AI platforms to: Flag risky clauses Suggest negotiation points Speed up contract turnaround This reduces legal bottlenecks and accelerates deal closures—especially in high-volume environments. 3. Predictive Litigation Analytics AI models are being used to: Forecast case outcomes Evaluate opposing counsel strategies Guide smarter resource allocation This helps legal teams build stronger strategies before stepping into court. 4. Custom AI Models for Specialized Practices Generic tools are giving way to tailored AI models that fit specific legal domains like real estate, IP, or corporate law. Swostitech’s Legal AI lets firms deploy custom-trained solutions that adapt to your unique workflows and data needs. Stay Ahead with Swostitech Legal AI AI adoption isn't just about tools—it's about transformation. Law firms that invest early in purpose-built AI will lead in productivity, accuracy, and client satisfaction. 📩 Want to learn more? Contact us today for a demo of our Legal AI platform.",
    img: blog,
    date: "February 01, 2021",
  },
  {
    title:
      "Case Study: How Bhubaneswar Engineering College Transformed Administration with Swostitech",
    text: "Challenge: Manual Work Led to Time Loss—and Money Loss Bhubaneswar Engineering  ",
    img: blog2,
    date: "February 01, 2021",
  },
];

const Blog = () => {
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const navigate = useNavigate();
  const toggleReadMore = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  const handleReadMoreClick = (index) => {
    navigate(`/blog/${index}`);
  };

  return (
    <Container
      data-aos="fade-up"
      id="blog"
      className="blog mb-5 px-0 h-100"
      style={{ marginTop: "10%" }}
    >
      <ParticlesBackground />
      <div className="text-center mb-5">
        <h3 className="text-primary mb-3 mt-5">Our Blog</h3>
      </div>
      <Row className=" mb-5">
        {blogData.map((item, index) => {
          const isExpanded = expandedIndexes.includes(index);
          const previewText = item.text.slice(0, 150) + "...";

          return (
            <Col xl={3} lg={4} md={6} className="mb-4" key={index}>
              <div className="blog-card">
                <img src={item.img} alt={item.title} className="blog-image" />
                <div className="blog-content">
                  <h6>{item.title}</h6>
                  <p>{isExpanded ? item.text : previewText}</p>
                  {/* <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => handleReadMoreClick(index)}
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button> */}
                  <p
                    className="read-more"
                    onClick={() => handleReadMoreClick(index)}
                  >
                    Read More
                    <FaLongArrowAltRight
                      size={18}
                      style={{ marginLeft: "6px" }}
                    />
                  </p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Blog;



