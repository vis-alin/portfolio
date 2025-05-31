import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="relative w-full text-gray-100 text-center py-10 bg-black overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-green-400 mb-6">Get in Touch</h2>

        <div className="bg-gray-900 p-6 rounded-xl border border-green-500 shadow-lg text-left space-y-4">
          <p className="text-gray-300 flex items-center">
            <FaEnvelope className="text-red-400 mr-3" />
            <strong>Email:</strong>&nbsp; vishal630488@gmail.com
          </p>
          <p className="text-gray-300 flex items-center">
            <FaPhoneAlt className="text-yellow-400 mr-3" />
            <strong>Phone:</strong>&nbsp; +91-6299641204
          </p>
          <p className="text-gray-300 flex items-center">
            <FaLinkedin className="text-blue-400 mr-3" />
            <strong>LinkedIn:</strong>&nbsp;
            <a
              href="https://www.linkedin.com/posts/vishal-kumar-81942a322_certified-in-core-cybersecurity-skills-by-activity-7325243637439594496-aP7G"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Certification Post
            </a>
          </p>

          {/* Embedded Scrollable LinkedIn Post */}
          <div className="mt-6 border border-blue-400 rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7325243637439594496"
              height="100%"
              width="100%"
              title="LinkedIn Post"
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
