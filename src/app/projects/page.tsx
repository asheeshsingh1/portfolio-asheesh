// app/projects/page.tsx
export default function ProjectsPage() {
  return (
    <section className="projects-section">
      <h1 className="projects-heading">Projects</h1>
      <p className="work-summary">Here are some of the projects I’ve built to explore new technologies, 
        solve real-world problems, and sharpen my skills. From backend systems 
        to full-stack applications, each project reflects my passion for clean architecture, 
        performance, and thoughtful user experience.</p>

      <div className="project-card">
        <h2 className="project-title">🔊 Buddy</h2>
        <p className="project-tech">Python • NestJS • Google Speech-to-Text • Custom Response Engine</p>
        <ul className="project-features">
          <li>Backend in Python for audio processing and task execution</li>
          <li>Google Speech-to-Text API for voice command transcription</li>
          <li>In-house static response engine for common queries</li>
          <li>NestJS frontend with REST APIs and voice simulation UI</li>
          <li>Handles scheduling, shipment tracking, and daily reminders</li>
        </ul>
        <p className="project-summary">
          This assistant showcases seamless integration of speech technology with backend intelligence, enabling real-time task automation through voice.
        </p>
      </div>

      <div className="project-card">
        <h2 className="project-title">🧾 JSON Formatter & Validator</h2>
        <p className="project-tech">React • JavaScript • JSON Parsing</p>
        <ul className="project-features">
          <li>Live JSON validation with instant syntax error feedback</li>
          <li>Prettified output with proper indentation and structure</li>
          <li>Collapsible views for nested objects and arrays</li>
          <li>User-friendly UI for quick debugging and testing</li>
        </ul>
        <p className="project-summary">
          A browser-based utility designed to make JSON easier to read, debug, and explore. Ideal for developers dealing with API responses, config files, or structured data.
        </p>
      </div>

      <div className="project-card">
        <h2 className="project-title">🤖 Nano Bot – AI-Powered Support Assistant</h2>
        <p className="project-tech">Python • ClickUp API • NLP • Automation</p>
        <ul className="project-features">
          <li>Real-time chatbot trained on ClickUp ticket resolution history</li>
          <li>Recommended fixes to support staff using contextual data</li>
          <li>Enabled internal workflow automation via chat triggers</li>
          <li>Improved resolution time and overall support efficiency</li>
        </ul>
        <p className="project-summary">
          Built for internal use, Nano Bot turned passive documentation into active solutions. It bridged the gap between ticketing data and actionable support, making technical assistance faster, smarter, and more scalable.
        </p>
      </div>
      
    </section>
  );
}
