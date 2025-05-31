import { motion } from "framer-motion";
import { FaTools, FaBug, FaEye, FaNetworkWired, FaTerminal } from "react-icons/fa";
import { SiGrafana } from "react-icons/si";

function Projects() {
  return (
    <motion.section
      id="projects"
      className="relative w-full text-gray-100 text-center py-10 bg-black overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-green-400 mb-10">Projects & Research</h2>

        <ul className="space-y-6 text-left text-gray-300">
          <li className="bg-gray-900 p-5 rounded-xl border border-green-500 shadow-lg">
            <SiGrafana className="inline text-orange-400 text-xl mr-2" />
            <strong>Grafana Misconfiguration Vulnerability Disclosure:</strong> Discovered and responsibly disclosed an authentication bypass in a public-facing Grafana dashboard exposing sensitive metrics.
          </li>

          <li className="bg-gray-900 p-5 rounded-xl border border-green-500 shadow-lg">
            <FaEye className="inline text-red-400 text-xl mr-2" />
            <strong>Advanced Python-Based Keylogger:</strong> Developed a stealthy and robust keylogger in Python featuring multiple logging mechanisms—web-based API delivery, email-based exfiltration, and local storage fallback. Integrated persistence, anti-debugging checks, and dynamic obfuscation for enhanced evasion.
          </li>

          <li className="bg-gray-900 p-5 rounded-xl border border-green-500 shadow-lg">
            <FaTools className="inline text-yellow-300 text-xl mr-2" />
            <strong>Red Team Simulation Setup:</strong> Created a full red team lab with Active Directory, Windows Servers, and attacker boxes using Proxmox + Packer + Ansible automation.
          </li>

          <li className="bg-gray-900 p-5 rounded-xl border border-green-500 shadow-lg">
            <FaNetworkWired className="inline text-blue-400 text-xl mr-2" />
            <strong>Network Monitoring & Packet Analysis Tool:</strong> Built a custom tool using Scapy and Tkinter to capture, filter, and analyze live network traffic for anomaly detection.
          </li>

          <li className="bg-gray-900 p-5 rounded-xl border border-green-500 shadow-lg">
            <FaBug className="inline text-pink-400 text-xl mr-2" />
            <strong>Browser Exploitation Playground:</strong> Designed a local browser exploitation playground with XSS, CSRF, CSP bypasses, and basic CORS misconfiguration scenarios.
          </li>

          <li className="bg-gray-900 p-5 rounded-xl border border-green-500 shadow-lg">
            <FaTerminal className="inline text-gray-300 text-xl mr-2" />
            <strong>ThreatScript Automation Suite:</strong> A Bash/PowerShell toolkit for threat enumeration, log harvesting, and alert triage integrated into an ELK pipeline.
          </li>
        </ul>
      </div>
    </motion.section>
  );
}

export default Projects;
