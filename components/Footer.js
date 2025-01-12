export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-400 to-blue-600 text-white py-8">
      <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; 2025 Kevin Gomel. All rights reserved.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex justify-center space-x-6">
          <a
            href="https://github.com/kevingomel22"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
            aria-label="GitHub"
          >
            {/* SVG Icon */}
          </a>
          <a
            href="https://instagram.com/kevingomell"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
            aria-label="Instagram"
          >
            {/* SVG Icon */}
          </a>
          <a
            href="https://linkedin.com/in/kevin-gomel-b01135291"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
            aria-label="LinkedIn"
          >
            {/* SVG Icon */}
          </a>
        </div>
      </div>
    </footer>
  );
}
