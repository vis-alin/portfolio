import { motion } from "framer-motion";

function Education() {
  return (
    <motion.section
      id="education"
      className="relative w-full text-gray-100 text-center py-10 bg-black overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-green-400 mb-10">Education</h1>

        <div className="max-w-xl mx-auto bg-gray-900 rounded-2xl p-6 shadow-lg border border-green-500">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Bachelor of Technology (B.Tech)
          </h2>
          <p className="text-green-400 font-medium mb-1">
            Specialization: Computer Science - Cyber Security
          </p>
          <p className="text-gray-300">
            Parul University, Vadodara, Gujarat
          </p>
          <p className="text-gray-400 mt-2 italic">Expected Graduation: 2028</p>
        </div>
      </div>
    </motion.section>
  );
}

export default Education;
