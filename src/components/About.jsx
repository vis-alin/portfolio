import { motion } from "framer-motion";
import CircuitEffect from "./CircuitEffect";

function About() {
  return (
    <motion.section
      id="about"
      className="relative w-full text-gray-100 text-center py-10 overflow-hidden bg-black"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Circuit Wiring Background */}
      <div className="absolute inset-0 z-0 opacity-10 animate-pulse">
        <CircuitEffect />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src="/mine.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-green-400 shadow-md object-cover"
          />
        </div>

        {/* About Me Header */}
        <h1 className="text-5xl font-bold text-green-400 mb-10">About Me</h1>

        <h2 className="text-4xl font-extrabold mb-6 border-b-4 border-green-500 inline-block pb-2">
          Professional Summary
        </h2>

        <p className="text-lg leading-relaxed tracking-wide px-4">
          Experienced{" "}
          <span className="font-semibold text-green-400">
            Cybersecurity Analyst
          </span>{" "}
          specializing in network security, ethical hacking, and penetration
          testing. Skilled at uncovering and responsibly reporting critical
          vulnerabilities — including the discovery of a misconfigured Grafana
          instance during reconnaissance on Cloudie.hk. I leverage industry
          tools and frameworks such as Kali Linux, Burp Suite, Wireshark, and
          Metasploit to simulate and analyze real-world threats.
        </p>

        <p className="text-lg leading-relaxed tracking-wide mt-4 px-4">
          My interest in cybersecurity began with a fascination for digital
          forensics and a desire to understand the inner workings of computer
          systems. That curiosity quickly evolved into a passion for defending
          networks and sensitive data from malicious actors. I stay current with
          the latest threat intelligence and enjoy participating in Capture The
          Flag (CTF) competitions to hone my skills and stay ahead of emerging
          threats.
        </p>

        <p className="text-lg leading-relaxed tracking-wide mt-4 px-4">
          Known for being detail-oriented, highly analytical, and a strong team
          player, I thrive in collaborative environments where security and
          innovation intersect. My goal is to contribute to organizations that
          prioritize resilience and security-first mindsets. I’m committed to
          continuous learning and pursuing advanced certifications to deepen my
          impact in the cybersecurity field.
        </p>

        <p className="mt-4 text-green-400 italic px-4">
          Passionate about strengthening defenses and safeguarding digital
          assets through thorough analysis and proactive threat mitigation.
        </p>
      </div>
    </motion.section>
  );
}

export default About;
