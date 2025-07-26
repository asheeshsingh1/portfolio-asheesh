// app/workex/page.tsx
"use client";

import { motion } from "framer-motion";

const workExperience = [
  {
    role: "Software Engineer",
    company: "Builder.ai",
    companyUrl: "https://builder.ai",
    duration: "2023 May – Present",
    description: [
      "Led the development of scalable microservices using FastAPI, Docker, PostgreSQL, and implemented CI/CD workflows with Prefect and Gitlab pipelines.",
      "Built the Health Check app for Developer Surface an RDP coding platform, enabling autonomous issue remediation and reducing support tickets by 70%.",
      "Designed and built a state management service to track access, software custom installation using Python FastAPI, PostgreSQL, Terraform and Pydantic.",
      "Built facial authentication and liveness detection for Developer Surface using Python, streaming events via Kafka saving us $2 million annually.",
      "Implemented persistent playbooks and Redis as sidecar containers in Kubernetes pods via Helm chart, reducing the cost per user."
    ]
  },
  {
    role: "Software Engineer",
    company: "Zimyo",
    companyUrl: "https://zimyo.com",
    duration: "2022 Nov – 2023 Apr",
    description: [
      "Integrated Socket.IO and Firebase Cloud Messaging into a messaging app to enable real-time tagging and push notifications, enhancing user interaction.",
      "Automated email trigger using SendGrid, and built reports module using Sequelize ORM, streamlining HR communication process.",
      "Built modular notification services integrated with backend APIs and Firebase."
    ],
  },
  {
    role: "Application Developer Analyst",
    company: "Accenture",
    companyUrl: "https://accenture.com",
    duration: "2022 June – 2022 Nov",
    description: [
      "Worked with Authentication of the application with Web Security Configuration and JWT token for ROLE based authorization.",
      "Achieved over 90% unit test coverage, ensuring high code reliability, maintainability, and reduced defect rates."
    ]
  },
  {
    role: "Software Engineer",
    company: "Paytm",
    companyUrl: "https://paytm.com",
    duration: "2021 June – 2022 June",
    description: [
      "Built Checksum Utility APIs with Java Spring Boot and comprehensive Postman Collection, which significantly reduced the team’s manual eﬀort.",
      "Developed generic functions to automate the retrieval of properties from EC2 instances, streamlining data access and boosting operational eﬃciency.",
      "Enhanced a SpringBoot based mock application and integrated it with automation testing scripts, enabling eﬃcient end-to-end test validation."
    ]
  },
  {
    role: "Software Engineer - Intern",
    company: "Paytm",
    companyUrl: "https://paytm.com",
    duration: "2021 Feb – 2021 June",
    description: [
      "Worked closely with DevOps teams to manage AWS infrastructure and automate EC2 instance monitoring scripts.",
      "Assisted in designing CI/CD pipelines using Jenkins and GitLab, enabling smooth code deployments and rollback mechanisms.",
      "Wrote unit and integration tests using JUnit and Mockito, increasing test coverage and code reliability."
    ]
  },
];

export default function WorkExperiencePage() {
  return (
    <section className="workex-section">
      <h1 className="workex-heading">Work Experience</h1>
      <p className="work-summary">
        I’m a Software Engineer with full-stack experience across Python (FastAPI), Java (Spring Boot), PostgreSQL, and real-time systems. At Builder.ai, I led key projects like autonomous issue resolution, Kafka-based facial authentication, and infra optimization with Redis and Kubernetes.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {workExperience.map((exp, idx) => (
          <motion.div
            key={idx}
            className="workex-card"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-xl font-semibold text-white">👨‍💻 {exp.role}</h2>
            <h3 className="text-md text-gray-300">
              <a 
                href={exp.companyUrl}
                target="_blank" 
                rel="noopener noreferrer" 
                className="link-unstyled"
              >
                {exp.company}
              </a>
            </h3>
            <p className="text-sm text-gray-400 mb-2">📅 : {exp.duration}</p>
            {exp.description.map((point: string, index: number) => (
              <p key={index} className="text-center text-gray-300">
                • {point}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
