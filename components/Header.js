import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [activePage, setActivePage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Pantau perubahan hash URL
  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      setActivePage(currentHash);
    };

    // Setel hash awal saat komponen dimuat
    handleHashChange();

    // Pantau perubahan hash URL
    window.addEventListener("hashchange", handleHashChange);

    // Bersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-customBlue text-white p-4 sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center relative">
        <h1 className="text-2xl font-bold flex items-center">KPG</h1>
        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link
              href="#home"
              onClick={() => setActivePage("#home")}
              className={`hover:text-indigo-300 transition-colors duration-300 ${
                activePage === "#home" ? "text-indigo-500" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              onClick={() => setActivePage("#about")}
              className={`hover:text-indigo-300 transition-colors duration-300 ${
                activePage === "#about" ? "text-indigo-500" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              onClick={() => setActivePage("#projects")}
              className={`hover:text-indigo-300 transition-colors duration-300 ${
                activePage === "#projects" ? "text-indigo-500" : ""
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onClick={() => setActivePage("#contact")}
              className={`hover:text-indigo-300 transition-colors duration-300 ${
                activePage === "#contact" ? "text-indigo-500" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="lg:hidden absolute right-4 top-4 text-white"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Side Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-3/4 bg-customBlue transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button className="text-white text-3xl" onClick={closeMenu}>
              &times;
            </button>
          </div>
          <ul className="space-y-6 p-10 text-white">
            <li>
              <Link
                href="#home"
                onClick={() => {
                  setActivePage("#home");
                  closeMenu();
                }}
                className={`hover:text-indigo-300 transition-colors duration-300 ${
                  activePage === "#home" ? "text-indigo-500" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                onClick={() => {
                  setActivePage("#about");
                  closeMenu();
                }}
                className={`hover:text-indigo-300 transition-colors duration-300 ${
                  activePage === "#about" ? "text-indigo-500" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                onClick={() => {
                  setActivePage("#projects");
                  closeMenu();
                }}
                className={`hover:text-indigo-300 transition-colors duration-300 ${
                  activePage === "#projects" ? "text-indigo-500" : ""
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={() => {
                  setActivePage("#contact");
                  closeMenu();
                }}
                className={`hover:text-indigo-300 transition-colors duration-300 ${
                  activePage === "#contact" ? "text-indigo-500" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
