import React, { useState } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import {
  FcWorkflow,
  FcBusinessman,
  FcLeave,
  FcCalendar,
  FcMoneyTransfer,
  FcReading,
  FcManager,
  FcContacts,
  FcBusinessContact,
  FcAnswers,
  FcClock,
  FcFinePrint,
  FcSurvey,
  FcPieChart,
  FcLibrary,
  FcGraduationCap,
  FcCollaboration,
  FcReadingEbook,
  FcInTransit,
  FcStatistics,
  FcBriefcase,
  FcDepartment,
  FcNews,
  FcTemplate,
  FcConferenceCall,
} from "react-icons/fc";
import acadix from "../../assets/product/acadix3.png";
import ParticlesBackground from "../Animation/ParticlesBackground";

const roleOptions = [
  {
    title: "Admin",
    icon: <FcBusinessman size={45} />,
    role: "admin",
  },
  {
    title: "Teacher",
    icon: <FcManager size={45} />,
    role: "teacher",
  },
  {
    title: "Student",
    icon: <FcReading size={45} />,
    role: "student",
  },
];

const features = {
  student: [
    {
      icon: <FcWorkflow size={36} />,
      title: "Dashboard:",
      description:
        " Problem:\nStudents often miss important updates, circulars, or class changes due to fragmented communication.\nOur Solution:\n  A personalized dashboard that consolidates attendance, notices, assignments, and exam updates in one place—ensuring nothing is missed",
    },
    {
      icon: <FcContacts size={36} />,
      title: "Profile & Address Details ",
      description:
        "Problem:\n Institutions struggle to keep student records updated, leading to communication breakdowns and manual errors.\nOur Solution:\nA self-service profile management system where students can update their own contact and personal information, ensuring real-time accuracy",
    },
    {
      icon: <FcCalendar size={36} />,
      title: "Attendance Details ",
      description:
        "Problem:\nStudents frequently remain unaware of short attendance until it's too late, leading to exam disqualification.\nOur Solution: Live, transparent attendance tracking with daily updates and alerts—allowing students to monitor and correct their attendance proactively.",
    },
    {
      icon: <FcPieChart size={36} />,
      title: "Assignment Module ",
      description:
        "Problem:\nManual submission of assignments leads to delays, loss of documents, and lack of submission tracking.\nOur Solution:\n Digital submission and feedback system that enables students to download assignments, upload solutions, and view marks with time stamps.",
    },
    {
      icon: <FcGraduationCap size={36} />,
      title: "Exam Results ",
      description:
        "Problem:\nStudents often face delays or lack of clarity in receiving results and academic evaluations. Our Solution: Instant access to all exam results, grades, and evaluations in a structured digital format with downloadable mark sheets.",
    },
    {
      icon: <FcLeave size={36} />,
      title: "Leave Details",
      description:
        "Problem: Manual leave applications are time-consuming, hard to track, and often misplaced.\nOur Solution:\n An online leave application system where students can apply, track, and view approvals—making the process fast and traceable.",
    },
    {
      icon: <FcLibrary size={36} />,
      title: "Library Access ",
      description:
        "Problem:\nStudents often don't know the availability of books or miss due dates, leading to fines.\nOur Solution:\n Online library catalog access, book tracking, and due date reminders to reduce penalties and improve reading habits.",
    },
    {
      icon: <FcAnswers size={36} />,
      title: "Circulars & Notices Problem:",
      description:
        "Problem:Important institutional announcements may go unnoticed due to dependency on physical notice boards.\nOur Solution:\n  Digital circular board within the portal/mobile app to deliver real-time notifications and event updates directly to students.",
    },
    {
      icon: <FcCollaboration size={36} />,
      title: "Online Classes ",
      description:
        "Problem:\n Students miss virtual classes due to confusion around links, schedules, and platforms.\nOur Solution:\n I Integrated online class scheduler with joining links, automated alerts, and attendance sync for smooth virtual learning.",
    },
    {
      icon: <FcReadingEbook size={36} />,
      title: "Mentor Details ",
      description:
        "Problem:\n Students often feel disconnected from academic mentors, leading to reduced performance tracking and guidance.\nOur Solution:\n Dedicated mentor interface showing mentor assignments, feedback, meeting records, and communication logs for improved student support.",
    },
    {
      icon: <FcClock size={36} />,
      title: "Time Table",
      description:
        "Problem: Printed timetables become obsolete with last-minute changes, causing confusion among students.\nOur Solution:\n  Dynamic, real-time timetable access with instant updates on subject changes, room allocations, or substitutions.",
    },
    {
      icon: <FcSurvey size={36} />,
      title: "Grievances ",
      description:
        "Problem:\nStudents may hesitate to report problems due to lack of confidentiality or fear of being unheard.\nOur Solution:\n  Secure, transparent grievance submission system where issues can be raised and tracked until resolved—anonymously or openly.",
    },
  ],
  teacher: [
    {
      icon: <FcWorkflow size={36} />,
      title: "Teacher Dashboard",
      description:
        "Problem:\nTeachers struggle to manage multiple responsibilities—attendance, assignments, and class schedules—across various tools.\nOur Solution:\nA centralized dashboard displaying class allocations, today's schedule, pending tasks, and student alerts for easy daily planning and quick action.",
    },
    {
      icon: <FcBusinessContact size={36} />,
      title: "Profile & Contact Management:",
      description:
        "Problem:\nSchools lack a structured system to update or verify teacher contact and qualification details.\nOur Solution:\n Each teacher can update and manage their personal and academic information, making HR communication seamless and records accurate.",
    },
    {
      icon: <FcCalendar size={36} />,
      title: "Student Attendance Entry:",
      description:
        "Problem:\nManual attendance sheets are prone to loss, errors, and time delays.\nOur Solution:\nEasy digital attendance entry, real-time submission, and auto-sync with student and admin dashboards for 100% transparency and accountability.",
    },
    {
      icon: <FcPieChart size={36} />,
      title: "Assignment Upload and Review:",
      description:
        "Problem:\nAssignment distribution and checking is time-consuming and scattered.\nOur Solution:\nUpload assignments, define deadlines, and review submissions from one interface—with automated student reminders and feedback options.",
    },
    {
      icon: <FcAnswers size={36} />,
      title: "Exam Marks Entry:",
      description:
        "Problem:\nManual exam mark entries increase chances of errors and delays in result publication.\nOur Solution:\nTeachers can enter marks securely online, with options for internal, practical, or written assessments—all synced to the student report card.",
    },
    {
      icon: <FcClock size={36} />,
      title: "Class Time Table Access:",
      description:
        "Problem:\nTeachers often deal with last-minute schedule changes without proper updates.\nOur Solution:\nAccess real-time class and substitution schedules via the portal or app—ensuring they’re always prepared.",
    },
    {
      icon: <FcFinePrint size={36} />,
      title: "Student Academic Performance Tracking:",
      description:
        "Problem:\nTeachers find it hard to evaluate a student’s performance holistically due to lack of centralized data.\nOur Solution:\nAccess attendance trends, assignment performance, and exam history in one place—enabling targeted academic mentoring.",
    },
    {
      icon: <FcLeave size={36} />,
      title: "Leave Management:",
      description:
        "Problem:\nPaper-based leave requests are slow and difficult to track.\nOur Solution:\nSubmit, view, and manage leave requests online—with approval workflows linked to the Admin and HR systems.",
    },
    {
      icon: <FcSurvey size={36} />,
      title: "Grievance Submission:",
      description:
        "Problem:Teachers hesitate to raise operational or student-related issues due to lack of privacy or follow-up.\nOur Solution:\nA structured grievance module to raise issues, track response status, and maintain professionalism with admin intervention when needed.",
    },
    // {
    //   icon: <FcMoneyTransfer />,
    //   title: "Mentorship Tools:",
    //   description:
    //     "No systematic tracking. Our Solution: Dedicated tools for mentoring and support.",
    // },
  ],
  admin: [
    {
      icon: <FcWorkflow size={36} />,
      title: "Dashboard:",
      description:
        "Problem:\nAdministrators often struggle to get a centralized view of student data, attendance, fee collections, academic records, and alerts.\nOur Solution:\nOur intelligent Dashboard provides a real-time, graphical overview of all school operations, offering quick access to critical metrics like attendance stats, notices, fee summaries, upcoming events, and more – all in one place.",
    },
    {
      icon: <FcReading size={36} />,
      title: "Student Management:",
      description:
        "Problem:\nManaging student registration, promotion, attendance, certificates, and communications manually is time-consuming and error-prone.\nOur Solution:\nEasily handle the complete student lifecycle – from registration, attendance, class promotion, certificate issuance, to personalized messaging and club assignments – with our centralized Student Management module.",
    },
    {
      icon: <FcManager size={36} />,
      title: "Staff Management:",
      description:
        "Problem:\nRecruitment and records for teaching and non-teaching staff are difficult to maintain and monitor efficiently\nOur Solution:\nThe Staff Registration module enables seamless onboarding, employee data management, and role assignment to ensure administrative clarity and operational efficiency.",
    },
    {
      icon: <FcMoneyTransfer size={36} />,
      title: "Fee Management:",
      description:
        "Problem:\nInstitutes face challenges in tracking student fees, fee structure customization, pending dues, and generating ledgers.\nOur Solution:\nOur Fee Module provides a comprehensive solution with ADHOC fee support, custom structures, real-time student fee tracking, automated ledgers, and a centralized fee dashboard for easy monitoring.",
    },
    {
      icon: <FcLibrary size={36} />,
      title: "Library Management:",
      description:
        "Problem:\nManual library systems lead to book mismanagement, difficulty in tracking issues/returns, and generating reports.\nOur Solution:\nDigitize your library with modules for book cataloging, barcoding, issuing/returning, and advanced reporting like most circulated books, lost/damaged reports, and more – making the library efficient and accountable.",
    },
    {
      icon: <FcPieChart size={36} />,
      title: "Report Card Management:",
      description:
        "Problem:\nCreating exam reports, circulars, and managing student performance records manually is time-intensive.\nOur Solution:\nAutomate report card generation, upload important documents, send messages, and manage results with our comprehensive Report Card module integrated with exam and communication features.",
    },
    {
      icon: <FcInTransit size={36} />,
      title: "Transport Management:",
      description:
        "Problem:\nTracking student transportation manually often results in inefficiencies and a lack of accountability.\nOur Solution:\nOur Transport module allows admin to map students to transport routes, monitor transport details, and improve safety and transparency with searchable student transport records.",
    },
    {
      icon: <FcStatistics size={36} />,
      title: "Expense Management:",
      description:
        "Problem:\nUnorganized tracking of school expenses leads to budgeting challenges and lack of financial insights.\nOur Solution:\nMaintain full control over institutional expenses with categorized records, party-wise ledgers, day book entries, and Profit & Loss reporting for financial accuracy.",
    },
    {
      icon: <FcBriefcase size={36} />,
      title: "Other Income Management:",
      description:
        "Problem:\n Schools often miss tracking alternate revenue streams like donations, sponsorships, or events.\nOur Solution:\nSolution:Track and record all sources of other income in a searchable format to maintain complete financial visibility.",
    },
    {
      icon: <FcDepartment size={36} />,
      title: "Hostel Management:",
      description:
        "Problem:\nManaging hostel fees, student allocations, and records manually is tedious and error-prone.\nOur Solution:\nSimplify hostel fee collection and student assignment with structured dashboards, search filters, and automated fee records.",
    },
    {
      icon: <FcClock size={36} />,
      title: "Time Table Management:",
      description:
        "Problem:\nCreating and updating class and teacher timetables manually is cumbersome and error-prone.\nOur Solution:\nAuto-generate and manage both class-wise and teacher-specific timetables, including lesson plans for each session, ensuring scheduling efficiency.",
    },
    {
      icon: <FcReadingEbook size={36} />,
      title: "Mentorship & Student Support:",
      description:
        "Problem:\n Lack of personalized student follow-ups and mentorship tracking results in poor student support.\nOur Solution:\nAssign mentors, monitor student performance, and track follow-ups with detailed student insights to ensure academic and behavioral progress.",
    },
    {
      icon: <FcNews size={36} />,
      title: "Academic Document Upload:",
      description:
        "Problem:\n Physical storage of academic documents increases the risk of misplacement and reduces accessibility.\nOur Solution:\nSecurely upload and store academic documents digitally for instant access and easy record maintenance.",
    },
    {
      icon: <FcCalendar size={36} />,
      title: "Attendance Management:",
      description:
        "Problem:\nCManual attendance tracking leads to inaccuracies and inefficiencies in monitoring student participation.\nOur Solution:\nTrack daily attendance with easy-to-use dashboards, generate reports, and sync with student records in real-time.",
    },
    {
      icon: <FcSurvey size={36} />,
      title: "Grievance Redressal:",
      description:
        "Problem:\n Lack of structured systems for student complaints leads to unresolved issues and dissatisfaction.\nOur Solution:\n Empower students to file grievances digitally while the admin can track, assign, and resolve them transparently through the grievance dashboard.",
    },
    {
      icon: <FcConferenceCall size={36} />,
      title: "Visitors Management:",
      description:
        "Problem:\n Manual logging of visitors creates security risks and leaves no digital trace.\nOur Solution:\n Maintain a real-time visitor list and improve campus safety by tracking entries/exits with detailed visitor logs.",
    },
    {
      icon: <FcTemplate size={36} />,
      title: " MOU Management:",
      description:
        "Problem:\nManaging Memorandums of Understanding (MOUs) with institutions or companies becomes messy without centralization.\nOur Solution:\n Digitally store, track, and manage MOU records through an organized MOU List for transparency and quick reference.",
    },
    {
      icon: <FcCollaboration size={36} />,
      title: "Training and Placement:",
      description:
        "Problem:\n Educational institutions lack tools to systematically manage training programs and student placements.\nOur Solution:\n Coordinate trainings, share placement circulars, and communicate effectively with students through integrated messaging and records.",
    },
    {
      icon: <FcAnswers size={36} />,
      title: " Circulars & Notices:",
      description:
        "Problem:\n Important announcements often don’t reach all stakeholders on time or get lost in manual systems.\nOur Solution:\n  Instantly broadcast circulars and notices digitally to students, teachers, and parents, ensuring timely communication.",
    },
  ],
};

function Acadix() {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <Container className="my-5 pt-5">
      <ParticlesBackground />
      <Row className="mb-4">
        <Col>
          <h2 className="text-center fw-bold text-dark fade-up">
            ACADIX – Smart Management for Smarter Institutions
          </h2>
          <p className="text-center text-muted fs-5 fade-up">
            Transform how your institution manages admissions, academics, staff,
            and communication — all from a single dashboard.
          </p>
        </Col>
      </Row>
      <Row className="align-items-justify mt-5">
        <Col lg={6} md={12} sm={12} xs={12} className="mb-5">
          <Image
            src={acadix}
            alt="acadix"
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
        <Col lg={6} md={12} sm={12} xs={12}>
          <h4 className="fw-bold mb-3 zoom-in">
            Swostitech ACADIX – All-in-One Academic, Administrative &
            Communication Management Software
          </h4>
          <p className="zoom-in">
            Swostitech ACADIX – Smarter School, Simplified Management Swostitech
            ACADIX is a powerful, all-in-one academic and administrative
            management software tailored for schools, colleges, and educational
            institutions. Designed to streamline operations and reduce manual
            tasks, ACADIX offers tools for staff attendance, leave management,
            payroll processing, shift scheduling, and more. With an intuitive
            interface and real-time data access, it empowers school
            administrators, teachers, and staff to work more efficiently while
            staying focused on what matters most—education.
          </p>

          <ul className="fade-up custom-list">
            <li>Self-Employee Management</li>
            <li>Attendance Tracking & Regularization</li>
            <li>Leave Management</li>
            <li>Payroll Processing</li>
            <li>Reimbursement & Expense Management</li>
            <li>Shift Scheduling</li>
            <li>Department & Role Management</li>
            <li>Holiday Calendar</li>
          </ul>
        </Col>
      </Row>

      <Row className="g-4 mb-4 mt-3">
        {roleOptions.map((roleItem, index) => (
          <Col lg={4} md={6} sm={6} xs={12} key={index}>
            <Card
              className={`text-center p-4 shadow-sm ${
                selectedRole === roleItem.role ? "bg-primary text-white" : ""
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedRole(roleItem.role)}
            >
              <div
                className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "60px",
                  height: "60px",
                  fontSize: "28px",
                  backgroundColor: "#f0f0f0",
                }}
              >
                {roleItem.icon}
              </div>
              <h5>
                <strong>{roleItem.title}</strong>
              </h5>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedRole && (
        <>
          <h4 className="mb-4 text-center text-uppercase">
            {selectedRole} Features
          </h4>
          <Row className="g-4 mb-5">
            {features[selectedRole].map((item, index) => (
              <Col lg={6} md={6} sm={6} xs={12} key={index}>
                <Card className=" hrms-card h-100 text-center p-3 shadow-sm">
                  <div
                    className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      fontSize: "24px",
                      backgroundColor: "#e0e0e0",
                    }}
                  >
                    {item.icon}
                  </div>
                  <Card.Body>
                    <h5>{item.title}</h5>
                    {/* <Card.Text>{item.description}</Card.Text> */}
                    <Card.Text>
                      {item.description.split("\n").map((line, index) => (
                        <div key={index}>
                          {line.startsWith("Problem:") ? (
                            <>
                              <strong>Problem:</strong>{" "}
                              {line.replace("Problem:", "").trim()}
                            </>
                          ) : line.startsWith("Our Solution:") ? (
                            <>
                              <strong>Our Solution:</strong>{" "}
                              {line.replace("Our Solution:", "").trim()}
                            </>
                          ) : (
                            line
                          )}
                        </div>
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      {/* Image and About Section */}
    </Container>
  );
}

export default Acadix;
