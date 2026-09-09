import React, { useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import "./CertificatesPage.css";

const onlineCertificates = [
  // 1. Google Certifications
  {
    category: "Google Certifications",
    items: [
      {
        title: "Gen AI Academy",
        organization: "Google Cloud × Hack2skill",
        date: "May 28, 2025",
        image: "/certificates/online/google-genai.jpeg",
        description:
          "Completed Gen AI Academy covering Google's Generative AI tools and platforms including Vertex AI, Gemini APIs, Imagen, Streamlit and Multimodal RAG.",
        credential: "#",
      },
      {
        title: "Google Cloud Arcade Facilitator Program",
        organization: "Google Cloud",
        date: "2025",
        image: "/certificates/online/google-arcade.jpeg",
        description:
          "Achieved the Ultimate Milestone with exceptional dedication in the Google Cloud Arcade Facilitator Program 2025 Cohort 1.",
        credential: "#",
      },
      {
        title: "Bring AI to Work Workshop",
        organization: "Google Workspace",
        date: "June 7, 2025",
        image: "/certificates/online/google-workspace.jpeg",
        description:
          "Successfully completed the Google Workspace Bring AI to Work Workshop.",
        credential: "#",
      },
      {
        title: "Google Cloud Study Jam 2025",
        organization: "GDG on Campus — BBDNIIT",
        date: "Oct–Nov 2025",
        image: "/certificates/online/gdg-studyjam.jpg",
        description:
          "Comprehensive completion certificate for practical cloud pathways during Google Cloud Study Jam 2025[cite: 1].",
        credential: "#",
      },
    ],
  },

  // 2. NPTEL / IIT Certifications
  {
    category: "NPTEL / IIT Certifications",
    items: [
      {
        title: "Fundamental Algorithms: Design and Analysis (Elite)",
        organization: "NPTEL — IIT Kharagpur",
        date: "Jan–Feb 2026",
        image: "/certificates/online/nptel-daa.jpeg",
        description:
          "Elite NPTEL Certification in Fundamental Algorithms: Design and Analysis with a consolidated score of 65%.",
        credential: "#",
      },
      {
        title: "Fundamentals of Object Oriented Programming (Elite)",
        organization: "NPTEL — IIT Roorkee",
        date: "Jan–Apr 2026",
        image: "/certificates/online/nptel-oops.jpeg",
        description:
          "Elite NPTEL Certification in Fundamentals of Object Oriented Programming with a consolidated score of 77%.",
        credential: "#",
      },
      {
        title: "Python for Data Science (Elite)",
        organization: "NPTEL — IIT Madras",
        date: "Jan–Feb 2025",
        image: "/certificates/online/nptel-python.jpeg",
        description:
          "Elite NPTEL Certification in Python for Data Science with a consolidated score of 75%.",
        credential: "#",
      },
      {
        title: "Operating System Fundamentals",
        organization: "NPTEL — IIT Kharagpur",
        date: "Jul–Oct 2025",
        image: "/certificates/online/nptel-os.jpeg",
        description:
          "12-week NPTEL Certification in Operating System Fundamentals with a consolidated score of 53%.",
        credential: "#",
      },
      {
        title: "Enhancing Soft Skills and Personality",
        organization: "NPTEL — IIT Kanpur",
        date: "Feb–Apr 2024",
        image: "/certificates/online/nptel-softskills.jpeg",
        description:
          "Completed the 8-week NPTEL course Enhancing Soft Skills and Personality with a consolidated score of 52%.",
        credential: "#",
      },
    ],
  },

  // 3. Hackathons & Tech Events
  {
    category: "Hackathons & Tech Events",
    items: [
      {
        title: "Solution Challenge 2026: Build with AI",
        organization: "Google Developer Groups × Hack2Skill",
        date: "July 22, 2026",
        image: "/certificates/online/solution-challenge-2026.jpeg",
        description:
          "Certificate of participation for successful prototype submission in Solution Challenge 2026: Build with AI.",
        credential: "#",
      },
      {
        title: "Coderush 2.0 Hackathon",
        organization: "BBDNIIT",
        date: "April 13, 2026",
        image: "/certificates/online/coderush-hackathon.jpeg",
        description:
          "Successfully participated in the Coderush 2.0 Hackathon demonstrating innovation and technical problem-solving.",
        credential: "#",
      },
      {
        title: "AKTU AI Tech Confluence Hackathon",
        organization: "GUVI × HCL × AKTU",
        date: "2025",
        image: "/certificates/online/guvi-hackathon.jpeg",
        description:
          "Certificate of participation for successfully participating in the Hackathon Event during AKTU AI Tech Confluence 2025.",
        credential: "#",
      },
      {
        title: "AKTU AI Tech Confluence 2025",
        organization: "GUVI × HCL × AKTU",
        date: "2025",
        image: "/certificates/online/guvi-confluence.jpeg",
        description:
          "Certificate of participation in AKTU AI Tech Confluence 2025 powered by HCL GUVI.",
        credential: "#",
      },
    ],
  },

  // 4. Leadership & Community
  {
    category: "Leadership & Community",
    items: [
      {
        title: "Core Team Member & Organizer Recognition",
        organization: "GDG on Campus — BBDNIIT",
        date: "2025",
        image: "/certificates/online/gdg-organizer.jpeg",
        description:
          "Awarded Certificate of Appreciation for leadership and community building as the campus GDG Organiser[cite: 1].",
        credential: "#",
      },
      {
        title: "DevFest Lucknow 2025 Appreciation",
        organization: "Google for Developers",
        date: "2025",
        image: "/certificates/online/devfest-lucknow-2025.jpeg",
        description:
          "Certificate of Appreciation for outstanding support, dedication, and contributions to DevFest Lucknow 2025.",
        credential: "#",
      },
      {
        title: "Organizer — Build with AI Profile Bootcamp",
        organization: "GDG on Campus — BBDNIIT",
        date: "May 2, 2026",
        image: "/certificates/online/gdg-profile-bootcamp.jpeg",
        description:
          "Dedicated efforts as an Organizer in successfully conducting the Build with AI - Profile Building Bootcamp.",
        credential: "#",
      },
      {
        title: "Volunteer — GenAI Hackathon Lucknow",
        organization: "AI Community Lucknow",
        date: "Nov 6, 2025",
        image: "/certificates/online/genai-hackathon-volunteer.jpeg",
        description:
          "Volunteer appreciation for active dedication and teamwork during the GenAI Hackathon Lucknow.",
        credential: "#",
      },
      {
        title: "Organizing Team — Profile Building Workshop",
        organization: "GDG — BBDNIIT",
        date: "May 2, 2026",
        image: "/certificates/online/gdg-profile-building.jpeg",
        description:
          "Contributed to organizing the workshop focused on impactful digital presence through LinkedIn, GitHub, and resumes.",
        credential: "#",
      },
    ],
  },

  // 5. Industry Training & Internships
  {
    category: "Industry Training & Internships",
    items: [
      {
        title: "Full Stack Development Summer Training",
        organization: "GRAStech × BBD Campus",
        date: "June–Aug 2026",
        image: "/certificates/online/grastech-fullstack.jpeg",
        description:
          "Successfully completed a 90 Hours Project-Based Summer Training Program on Full Stack Development[cite: 1].",
        credential: "#",
      },
      {
        title: "Python Development Virtual Internship",
        organization: "QSkill (SR INDIA)",
        date: "Jan–Feb 2026",
        image: "/certificates/online/qskill-python-internship.jpeg",
        description:
          "Certificate of completion for active participation in the Qskill virtual internship program in Python Development.",
        credential: "#",
      },
      {
        title: "Design to Deploy — Full Stack Web Journey",
        organization: "Softpro India × AKTU",
        date: "Nov 24, 2025",
        image: "/certificates/online/softpro-fullstack.jpeg",
        description:
          "Participated in the hands-on technical workshop 'Design to Deploy - A Full Stack Web Journey' in collaboration with Dr. APJ AKTU[cite: 1].",
        credential: "#",
      },
    ],
  },

  // 6. Courses & Skill Development
  {
    category: "Courses & Skill Development",
    items: [
      
      {
        title: "Java And C++ Complete Course",
        organization: "Udemy — Crunch Coding Institute",
        date: "Aug 11, 2025",
        image: "/certificates/online/udemy-java-cpp.jpeg",
        description:
          "Completed the Java And C++ Complete Course for Java And C++ Beginners.",
        credential: "#",
      },
      {
        title: "Python Skill Up",
        organization: "GeeksforGeeks",
        date: "2025",
        image: "/certificates/online/gfg-python.jpeg",
        description:
          "Successfully completed the Python Skill Up course by GeeksforGeeks.",
        credential: "#",
      },
      {
        title: "Learnovate Soft Skill Program",
        organization: "Learnovate Enterprises × BBD",
        date: "April 2026",
        image: "/certificates/online/learnovate.jpeg",
        description:
          "Completed the Learnovate Enterprises Soft Skill Program at Babu Banarasi Das Educational Group, Lucknow.",
        credential: "#",
      },
      {
        title: "Build with AI Using GitHub Workshop",
        organization: "GDG on Campus — BBDNIIT",
        date: "2026",
        image: "/certificates/online/gdg-github-ai.jpeg",
        description:
          "Active participation and completion of the workshop on AI-driven development and GitHub collaborative workflows.",
        credential: "#",
      },
    ],
  },

  // 7. Robotics & Competitions
  {
    category: "Robotics & Competitions",
    items: [
      {
        title: "1st Position — Line Follower",
        organization: "Utkarsh'25 — BBD Educational Group",
        date: "Feb 2025",
        image: "/certificates/online/utkarsh25-linefollower.jpeg",
        description:
          "Secured 1st position in the Line Follower robotics competition under the Technical category during Utkarsh'25 Future Tech annual fest.",
        credential: "#",
      },
      {
        title: "2nd Position — Line Follower",
        organization: "Utkarsh'24 — BBD Educational Group",
        date: "Feb 2024",
        image: "/certificates/online/utkarsh24-linefollower.jpeg",
        description:
          "Secured 2nd position in the Line Follower technical robotics challenge during Utkarsh'24 annual fest[cite: 1].",
        credential: "#",
      },
      {
        title: "2nd Position — Pick & Place",
        organization: "Utkarsh'24 — BBD Educational Group",
        date: "Feb 2024",
        image: "/certificates/online/utkarsh24-pickplace.jpeg",
        description:
          "Awarded Certificate of Merit for securing 2nd position in the Pick & Place technical competition at Utkarsh'24[cite: 1].",
        credential: "#",
      },
      {
        title: "3rd Position — Pick and Place",
        organization: "Utkarsh'25 — BBD Educational Group",
        date: "Feb 2025",
        image: "/certificates/online/utkarsh25-pickplace.jpeg",
        description:
          "Won 3rd position in the Pick and Place robotics event under the Technical category during Utkarsh'25 Future Tech annual fest.",
        credential: "#",
      },
      {
        title: "3rd Position — Light Follower",
        organization: "Utkarsh'25 — BBD Educational Group",
        date: "Feb 2025",
        image: "/certificates/online/utkarsh25-lightfollower.jpeg",
        description:
          "Awarded Certificate of Merit for securing 3rd position in the Light Follower technical competition at Utkarsh'25 Future Tech.",
        credential: "#",
      },
      {
        title: "3rd Position — Robo Marathon",
        organization: "Utkarsh'25 — BBD Educational Group",
        date: "Feb 2025",
        image: "/certificates/online/utkarsh25-robomarathon.jpeg",
        description:
          "Achieved 3rd position in the Robo Marathon event under the Technical category at Utkarsh'25 Future Tech annual fest.",
        credential: "#",
      },
      {
        title: "Robo Games: Light Follower",
        organization: "Utkarsh'24 — BBD Educational Group",
        date: "Feb 2024",
        image: "/certificates/online/utkarsh24-lightfollower-part.jpeg",
        description:
          "Active participation in the Robo Games Light Follower event during the Utkarsh'24 annual fest[cite: 1].",
        credential: "#",
      },
    ],
  },
];

const CertificateCard = ({ certificate }) => {
  return (
    <div className="certificate-card">
      <div className="certificate-image-wrapper">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="certificate-image"
        />

        <div className="certificate-image-overlay">
          <a
            href={certificate.image}
            target="_blank"
            rel="noreferrer"
          >
            View Certificate
          </a>
        </div>
      </div>

      <div className="certificate-card-content">
        <div className="certificate-org">
          {certificate.organization}
        </div>

        <h3>{certificate.title}</h3>

        <div className="certificate-date">
          {certificate.date}
        </div>

        <p>{certificate.description}</p>

        <a
          href={certificate.credential}
          target="_blank"
          rel="noreferrer"
          className="credential-btn"
        >
          <span>Show Credential</span>
          <ExternalLink size={15} />
        </a>
      </div>
    </div>
  );
};

const OnlineCertificates = () => {
  useEffect(() => {
    // Naye page pe aane ke BAAD scroll top hoga, jisse Navbar confuse nahi hoga
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="certificates-page">
      <div className="certificates-page-header">
        <Link to="/" className="back-btn">
          <ArrowLeft size={17} />
          Back to Portfolio
        </Link>

        <div className="page-label">ONLINE CERTIFICATIONS</div>

        <h1>
          My <span>Certificates</span>
        </h1>

        <p>
          A curated collection of my online certifications, technical
          programs, hackathons, workshops and learning achievements.
        </p>
      </div>

      <div className="certificate-category-container">
        {onlineCertificates.map((section, index) => (
          <section
            className="certificate-category"
            key={section.category}
          >
            <div className="category-heading">
              <span>0{index + 1}</span>
              <h2>{section.category}</h2>
              <div className="category-line"></div>
            </div>

            <div className="certificates-grid">
              {section.items.map((certificate) => (
                <CertificateCard
                  key={certificate.title}
                  certificate={certificate}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default OnlineCertificates;