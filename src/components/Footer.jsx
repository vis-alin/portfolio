import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-20 border-t border-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Intro */}
        <div>
          <h2 className="text-xl font-bold text-green-400">Vishal Kumar</h2>
          <p className="text-gray-400 mt-2">
            Building secure and efficient solutions for tomorrow’s digital landscape.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-green-300">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><a href="#about" className="hover:text-cyan-400">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
            <li><a href="#certificates" className="hover:text-cyan-400">Certificates</a></li>
            <li><a href="#education" className="hover:text-cyan-400">Education</a></li>
            <li><a href="#experience" className="hover:text-cyan-400">Experience</a></li>
            <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </div>

        {/* Download + Connect */}
        <div className="flex flex-col space-y-4">
          <a
            href="/Resume.pdf"
            download
            className="inline-block text-center px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 font-semibold text-black transition"
          >
            Download CV
          </a>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10">
        &copy; 2025 Vishal Kumar. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
