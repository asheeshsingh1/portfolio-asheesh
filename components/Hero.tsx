"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-section">
      <motion.h1
        className="hero-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m Asheesh 👋
      </motion.h1>

      <motion.p
        className="hero-subtext"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Turning Ideas into Scalable Code.
      </motion.p>

      <motion.div
        className="hero-summary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p>
          I’m a full-stack developer experienced in <strong>Python (FastAPI)</strong>, <strong>Java (Spring Boot)</strong>,
          <strong>Node.js</strong>, and modern frontend stacks like <strong>React</strong>, <strong>Next.js</strong>, and
          <strong> TypeScript</strong>. I’ve built scalable systems using <strong>PotgreSQL</strong>, <strong>Redis</strong>,
          <strong>Elasticsearch</strong>, and <strong>Kafka</strong>.
        </p>

        <p>
          I specialize in cloud-native deployments with <strong>Docker</strong>, <strong> Kubernetes</strong>,<strong> CI-CD</strong>,<strong> Orchestration with Prefect.io</strong>, and IaC tools like
          <strong> Ansible</strong> and <strong>Terraform</strong>, delivering solutions across <strong>AWS</strong> and
          <strong> Azure</strong>. My DevOps experience includes CI/CD pipelines with <strong>GitHub Actions</strong> and
          workflow automation using <strong>Prefect</strong>.
        </p>

      </motion.div>
    </section>
  );
}
