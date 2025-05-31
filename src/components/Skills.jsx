import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaLinux,
  FaGitAlt,
  FaDocker,
  FaWindows,
  FaBug,
  FaNetworkWired,
  FaSkullCrossbones,
  FaKey,
  FaUserSecret,
  FaTerminal,
  FaFileAlt,
} from "react-icons/fa";
import {
  SiGo,
  SiRust,
  SiDjango,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiWireshark,
} from "react-icons/si";
import { GiMagnifyingGlass, GiProcessor } from "react-icons/gi";

function Skills() {
  return (
    <motion.section
      id="skills"
      className="relative w-full text-gray-100 text-center py-10 bg-black overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-green-400 mb-10">Technical Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Programming Languages */}
          <div className="bg-gray-900 p-6 rounded-xl border border-green-500 shadow-lg">
            <h2 className="text-2xl font-semibold text-green-300 mb-2">Programming Languages</h2>
            <ul className="list-inside text-gray-300 space-y-2">
              <li><FaPython className="inline text-green-400 mr-2" /> Python, <SiGo className="inline mr-2" /> Go, <SiRust className="inline mr-2" /> Rust</li>
              <li><SiJavascript className="inline text-yellow-300 mr-2" /> JavaScript, <SiTypescript className="inline text-blue-300 mr-2" /> TypeScript</li>
              <li><SiPhp className="inline text-indigo-400 mr-2" /> PHP, C, C++</li>
              <li><span className="text-green-400">Scripting:</span> Bash, PowerShell</li>
            </ul>
          </div>

          {/* Frameworks & Technologies */}
          <div className="bg-gray-900 p-6 rounded-xl border border-green-500 shadow-lg">
            <h2 className="text-2xl font-semibold text-green-300 mb-2">Frameworks & Technologies</h2>
            <ul className="list-inside text-gray-300 space-y-2">
              <li><FaReact className="inline text-cyan-400 mr-2" /> React.js, <FaNodeJs className="inline text-green-400 mr-2" /> Node.js</li>
              <li><SiDjango className="inline text-white mr-2" /> Django, Express.js</li>
              <li><FaGitAlt className="inline text-orange-400 mr-2" /> Git/GitHub, <FaDocker className="inline text-blue-400 mr-2" /> Docker</li>
            </ul>
          </div>

          {/* Cybersecurity Tools */}
          <div className="bg-gray-900 p-6 rounded-xl border border-green-500 shadow-lg">
            <h2 className="text-2xl font-semibold text-green-300 mb-2">Cybersecurity Tools</h2>
            <ul className="list-inside text-gray-300 space-y-2">
              <li>
                <FaBug className="inline text-red-400 mr-2" /> Burp Suite,
                <FaNetworkWired className="inline text-purple-400 mx-2" /> Nmap,
                <FaSkullCrossbones className="inline text-pink-400 mx-2" /> Metasploit,
                <FaBug className="inline text-orange-400 mx-2" /> Nikto
              </li>
              <li>
                <GiMagnifyingGlass className="inline text-yellow-400 mr-2" /> SQLmap,
                <FaKey className="inline text-green-400 mx-2" /> Hydra,
                <FaUserSecret className="inline text-red-300 mx-2" /> John the Ripper
              </li>
              <li>
                <SiWireshark className="inline text-blue-300 mr-2" /> Wireshark,
                <FaTerminal className="inline text-gray-400 mx-2" /> Tcpdump,
                <GiProcessor className="inline text-teal-300 mx-2" /> Ghidra,
                <FaFileAlt className="inline text-indigo-300 mx-2" /> Autopsy
              </li>
            </ul>
          </div>

          {/* Security Specializations */}
          <div className="bg-gray-900 p-6 rounded-xl border border-green-500 shadow-lg">
            <h2 className="text-2xl font-semibold text-green-300 mb-2">Security Specializations</h2>
            <ul className="list-inside text-gray-300 space-y-2">
              <li>Penetration Testing & Red Teaming</li>
              <li>Incident Response & Cyber Forensics</li>
              <li>Reverse Engineering & Binary Exploits</li>
              <li>Threat Hunting & Vulnerability Management</li>
            </ul>
          </div>

          {/* Developed Security Tools */}
          <div className="bg-gray-900 p-6 rounded-xl border border-green-500 shadow-lg">
            <h2 className="text-2xl font-semibold text-green-300 mb-2">Security Tools & Scripts Developed</h2>
            <ul className="list-inside text-gray-300 space-y-2">
              <li><strong>AutoRecon:</strong> Automated scanner written in Python for network mapping & vuln detection.</li>
              <li><strong>LogSentry:</strong> Custom log parser to detect brute-force and suspicious login attempts.</li>
              <li><strong>MiniHoney:</strong> Lightweight honeypot using Flask to simulate SSH & HTTP services.</li>
            </ul>
          </div>

          {/* Operating Systems */}
          <div className="bg-gray-900 p-6 rounded-xl border border-green-500 shadow-lg md:col-span-2">
            <h2 className="text-2xl font-semibold text-green-300 mb-2">Operating Systems & Environments</h2>
            <ul className="list-inside text-gray-300 space-y-2">
              <li><FaLinux className="inline text-yellow-300 mr-2" /> Kali Linux, Parrot OS, Arch, Ubuntu</li>
              <li><FaWindows className="inline text-blue-300 mr-2" /> Windows 10/11, Windows Server</li>
              <li><FaDocker className="inline text-blue-400 mr-2" /> Docker, VMware, VirtualBox, WSL</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
