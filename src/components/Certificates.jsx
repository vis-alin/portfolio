import { motion } from "framer-motion";

function Certificates() {
  return (
    <motion.section
      id="certificates"
      className="relative w-full text-gray-100 text-center py-10 bg-black overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-green-400 mb-10">Certificates</h1>

        {/* Certificate Block */}
        <div className="bg-gray-900 p-6 rounded-xl border border-green-500 shadow-lg text-left">
          <h2 className="text-2xl font-semibold text-white mb-1">
            Cybersecurity Fundamentals – Palo Alto Networks Cybersecurity Academy
          </h2>
          <p className="text-gray-400 text-sm italic mb-4">
            Issued by Palo Alto Networks • Industry-Recognized
          </p>

          <p className="text-gray-300 mb-4">
            This certificate validates successful completion of the Cybersecurity Fundamentals course by
            Palo Alto Networks Cybersecurity Academy. It includes in-depth training on network security
            concepts, cyber threat landscapes, and hands-on labs involving threat detection, firewall
            configuration, and security policy enforcement using next-gen technologies.
            <br /><br />
            Through this academy, you gained experience in securing enterprise networks, analyzing
            real-world threats, and understanding core SOC (Security Operations Center) practices —
            preparing you for high-demand roles like SOC Analyst and Security Engineer.
          </p>

          <a
            href="/cer._"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-6 py-2 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition"
          >
            View Certificate
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Certificates;
