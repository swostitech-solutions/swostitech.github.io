
import React from "react";
import { useParams } from "react-router-dom";
import blog from "../assets/blog/blog2.jpg";
import blog1 from "../assets/blog/blog4.jpg";
import blog2 from "../assets/blog/blog5.jpg";
import blog3 from "../assets/blog/blog6.jpg";
import { Container } from "react-bootstrap";

const blogData = [
  {
    title: "Introducing Swostitech ERP 2.0.",
    text: "Introducing Swostitech ERP 2.0: The Next Generation of Intelligent Enterprise Management",
    text: "Today, we are excited to announce the launch of Swostitech ERP 2.0, the most advanced iteration of our enterprise resource planning suite designed to meet the evolving needs of modern organizations. Built on a robust, cloud‑native architecture, ERP 2.0 delivers real‑time data analytics, AI‑powered forecasting, and intuitive dashboards that empower decision‑makers with actionable insights. New industry‑specific modules include dedicated Oracle ERP integrations for mining and utilities, seamless HomeCare service automation, and tighter integration with Swostitech HRMS and Legal AI platforms for end‑to‑end operational efficiency. For existing customers, ERP 2.0 offers a straightforward upgrade path, with automated data migration tools and 24/7 support to ensure a smooth transition. Ready to experience the future of enterprise management? Visit our product page to learn more and schedule your personalized demo today.",
    img: blog3,
    date: "July 13, 2021",
  },
  {
    title: "How to Quickly Configure Your Swostitech HRMS...",
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
    title: "Case Study: How Bhubaneswar Engineering College...",
    
    text: "Challenge: Manual Work Led to Time Loss—and Money Loss Bhubaneswar Engineering College was bogged down by manual record-keeping, fragmented systems, and delayed reporting. The result? Wasted staff hours Frequent data errors Loss of lakhs of rupees due to missed fees, mismanaged records, and inefficient processes. Solution: Swostitech’s Acadix School Management System To tackle these issues, the college adopted Acadix, Swostitech’s all-in-one school and college management software. Key upgrades included: Automated admission workflows Centralized attendance and academic records Digital report cards and exam management. Everything was connected in one system—no more juggling files or chasing missing data. Impact: Huge Time Savings and Financial Gains The transformation was immediate: 85% fewer data entry errors 60% drop in admin time Records centralized—helping retain lakhs in previously lost revenue. Now, with real-time data and complete visibility, the college plugged revenue leaks and ran operations far more efficiently. Smooth Rollout with Dedicated Support Swostitech ensured success with: On-site staff training A 3-week pilot phase Ongoing support and issue resolution. Outcome: Digital, Data-Driven, and Dependable Since implementation, Bhubaneswar Engineering College has reported: Higher satisfaction among students and parents Accurate, faster reporting Better fee tracking and financial oversight. Acadix has become a vital part of the college’s digital backbone—streamlining operations and saving money. 📩 Want results like this? Contact Swostitech to see how Acadix can modernize your campus and protect your bottom line.",
    img: blog2,
    date: "February 01, 2021",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) return <p>Blog not found</p>;

  return (
    <Container className="p-5">
      <h2 className="mt-5">{blog.title}</h2>
      <p className="text-muted">{blog.date}</p>
      <img src={blog.img} alt={blog.title} className="img-fluid mb-4" />
      <p>{blog.text}</p>
    </Container>
  );
};

export default BlogDetails;
