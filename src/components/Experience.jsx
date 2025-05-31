import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.section
      id="experience"
      className="relative w-full text-gray-100 text-center py-10 bg-black overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-green-400 mb-10">Experience</h1>

        {/* Experience Item 1 */}
        <div className="mb-10 text-left bg-gray-900 p-6 rounded-xl border border-green-500 shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-2">
            Cybersecurity Analyst & Vulnerability Researcher
          </h2>
          <p className="text-green-400 font-medium mb-1">Independent Research & Penetration Testing</p>
          <p className="text-gray-300 mb-3">
            Proactively identified and responsibly disclosed a critical misconfiguration vulnerability in a Grafana instance on Cloudie.hk,
            mitigating potential data breaches and unauthorized access. Additional findings include:
          </p>
          <ul className="list-disc list-inside text-gray-400 mb-3">
            <li>Exploited a SQL Injection vulnerability in a financial services web app, enabling unauthorized data extraction.</li>
            <li>Discovered Cross-Site Scripting (XSS) flaws in a popular CMS platform, potentially leading to session hijacking.</li>
            <li>Uncovered improper authentication bypass in an internal API, which could have allowed privilege escalation.</li>
          </ul>
          <p className="text-gray-300">
            Skilled in conducting comprehensive penetration tests using tools such as Kali Linux, Burp Suite, and Metasploit to uncover and remediate
            security weaknesses.
          </p>
        </div>

        {/* Experience Item 2 */}
        <div className="mb-10 text-left bg-gray-900 p-6 rounded-xl border border-green-500 shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-2">
            Cybersecurity Forensics Specialist & Tool Developer
          </h2>
          <p className="text-green-400 font-medium mb-1">Project Lead & Incident Investigator</p>
          <p className="text-gray-300 mb-3">
            Designed and implemented a custom digital forensics framework to analyze cyber attacks, enabling rapid incident response
            and comprehensive investigation. The framework assists in evidence collection, attack vector mapping, and root cause analysis,
            enhancing organizational readiness against evolving cyber threats.
          </p>
        </div>

        {/* Experience Item 3 */}
        <div className="mb-10 text-left bg-gray-900 p-6 rounded-xl border border-green-500 shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-2">
            Ethical Hacker & Security Research Enthusiast
          </h2>
          <p className="text-green-400 font-medium mb-1">Continuous Learning & Community Engagement</p>
          <p className="text-gray-300">
            Actively participate in Capture The Flag (CTF) competitions and cybersecurity communities to sharpen skills and stay
            ahead of emerging threats. Adept at vulnerability assessment, social engineering tactics, and implementing proactive
            threat mitigation strategies aligned with industry best practices and compliance standards.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
