import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Button from "/components/Button";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

// Menggunakan font dari Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [activePage, setActivePage] = useState("");
  const [isClient, setIsClient] = useState(false); // State untuk memastikan hanya di sisi klien

  useEffect(() => {
    // Hanya set state di sisi klien
    setIsClient(true);
  }, []);

  // Update halaman aktif berdasarkan URL saat ini
  useEffect(() => {
    if (isClient) {
      const currentPath = window.location.hash;
      setActivePage(currentPath);
      document.title = "New Title"; // Akses document hanya di sisi klien
    }
  }, [isClient]);

  const animationContainer = useRef(null);

  // Pastikan animasi hanya dimuat di sisi klien
  useEffect(() => {
    if (isClient && animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current, // Kontainer animasi
        renderer: "svg", // Format rendering
        loop: true, // Animasi berulang
        autoplay: true, // Mulai otomatis
        path: "/animations/home-animation.json", // Path file JSON (pastikan path benar)
      });
    }
  }, [isClient]);

  const [isFullStack, setIsFullStack] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFullStack((prev) => !prev);
    }, 3000); // Ganti teks setiap 3 detik
    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  if (!isClient) {
    return null; // Menampilkan apa pun sebelum klien siap
  }
  return (
    <div>
      <div>
        <div>
          <Head>
            <title>My Portfolio</title>
            <meta name="description" content="Portfolio of Kevin Gomel" />
          </Head>
          <header className="bg-customBlue text-white p-4 sticky top-0 z-50 shadow-lg">
            <nav className="container mx-auto flex justify-between items-center relative">
              <h1 className="text-2xl font-bold flex items-center">KPG</h1>
              {/* Menu navigasi untuk desktop */}
              <ul className="hidden lg:flex space-x-6">
                <li>
                  <a
                    href="#home"
                    onClick={() => setActivePage("#home")}
                    className={`hover:text-indigo-300 transition-colors duration-300 ${
                      activePage === "#home" ? "text-indigo-500" : ""
                    }`}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={() => setActivePage("#about")}
                    className={`hover:text-indigo-300 transition-colors duration-300 ${
                      activePage === "#about" ? "text-indigo-500" : ""
                    }`}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={() => setActivePage("#projects")}
                    className={`hover:text-indigo-300 transition-colors duration-300 ${
                      activePage === "#projects" ? "text-indigo-500" : ""
                    }`}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => setActivePage("#contact")}
                    className={`hover:text-indigo-300 transition-colors duration-300 ${
                      activePage === "#contact" ? "text-indigo-500" : ""
                    }`}
                  >
                    Contact
                  </a>
                </li>
              </ul>

              {/* Hamburger Button */}
              <button
                className="lg:hidden absolute right-4 top-4 text-white"
                onClick={toggleMenu} // Menambahkan event handler untuk toggle menu
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

              {/* Side Menu (menampilkan dari kanan ke kiri) */}
              <div
                className={`lg:hidden fixed top-0 right-0 h-full w-3/4 bg-customBlue transition-transform duration-300 ease-in-out transform ${
                  isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="flex justify-end p-4">
                  {/* Tombol untuk menutup menu */}
                  <button
                    className="text-white text-3xl"
                    onClick={closeMenu} // Menambahkan event handler untuk menutup menu
                  >
                    &times;
                  </button>
                </div>
                <ul className="space-y-6 p-10 text-white">
                  <li>
                    <a
                      href="#home"
                      onClick={() => setActivePage("#home")}
                      className={`hover:text-indigo-300 transition-colors duration-300 ${
                        activePage === "#home" ? "text-indigo-500" : ""
                      }`}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      onClick={() => setActivePage("#about")}
                      className={`hover:text-indigo-300 transition-colors duration-300 ${
                        activePage === "#about" ? "text-indigo-500" : ""
                      }`}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      onClick={() => setActivePage("#projects")}
                      className={`hover:text-indigo-300 transition-colors duration-300 ${
                        activePage === "#projects" ? "text-indigo-500" : ""
                      }`}
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      onClick={() => setActivePage("#contact")}
                      className={`hover:text-indigo-300 transition-colors duration-300 ${
                        activePage === "#contact" ? "text-indigo-500" : ""
                      }`}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <section
            id="home"
            className="min-h-screen bg-customBlue flex items-center justify-center"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Teks Perkenalan */}
                <div className="text-center lg:text-left">
                  <h1 className="font-extrabold mb-4 text-[#4DA1A9] text-shadow">
                    Hello World, I am
                  </h1>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-white text-shadow">
                    Kevin Gomel
                  </h1>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-[#98DED9] text-shadow">
                    <Typewriter
                      words={["Full-stack Developer", "Web Developer"]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={100}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mt-4">
                    I recently graduated from{" "}
                    <span className="font-semibold text-[#93bde1]">
                      Petra Christian University
                    </span>{" "}
                    in Business Information System. I specialize in creating
                    dynamic, responsive websites and have a strong passion for
                    technology and design.
                  </p>
                </div>
                {/* Animasi Lottie */}
                <div className="flex justify-center">
                  <div
                    ref={animationContainer}
                    className="w-full sm:w-96 lg:w-80 h-auto lottie-container"
                  ></div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="about"
            className="min-h-screen bg-customBlue flex items-center justify-center px-4 sm:px-6 lg:px-12"
          >
            <div className="container mx-auto">
              {/* Header */}
              <h2 className="text-4xl font-bold text-center mb-12 text-white">
                About Me
              </h2>

              {/* Grid Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
                {/* Foto Tambahan */}
                <div className="flex justify-center lg:justify-start">
                  <Image
                    src="/profilepic.jpg" // Ganti sesuai path gambar Anda
                    alt="About Kevin Gomel"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg object-cover w-full sm:w-1/2"
                  />
                </div>

                {/* Konten Deskripsi */}
                <div>
                  <p className="text-lg text-white leading-relaxed mb-6">
                    Hello! My name is{" "}
                    <span className="font-semibold text-indigo-600">
                      Kevin Gomel
                    </span>
                    . I am a recent graduate in{" "}
                    <span className="font-semibold text-indigo-600">
                      Business Information System
                    </span>
                    . I enjoy building dynamic, user-friendly websites and
                    solving problems with technology.
                  </p>
                  <p className="text-lg text-white leading-relaxed mb-6">
                    My expertise includes front-end development, UI/UX design,
                    and full-stack development. I am passionate about learning
                    new technologies and collaborating on exciting projects.
                  </p>

                  {/* Highlight Keahlian */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white text-lg">
                    <li className="flex items-center">
                      <span className="text-indigo-500 mr-2">✔️</span> Fullstack
                      Developer
                    </li>
                    <li className="flex items-center">
                      <span className="text-indigo-500 mr-2">✔️</span>{" "}
                      Responsive Design
                    </li>
                    <li className="flex items-center">
                      <span className="text-indigo-500 mr-2">✔️</span> UI/UX
                      Design
                    </li>
                    <li className="flex items-center">
                      <span className="text-indigo-500 mr-2">✔️</span> Team
                      Collaboration
                    </li>
                  </ul>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-300 my-12"></div>

              {/* Experience */}
              <div className="container mx-auto text-center">
                {/* Header */}
                <h2 className="text-4xl font-bold mb-6 text-white">
                  My Experience
                </h2>
                <p className="text-lg text-white text-gray-600 mb-12">
                  A highlight of my professional journey.
                </p>

                {/* Card Experience */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {/* Pengalaman 1 */}
                  <div className="relative bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                    {/* Ikon di atas */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white p-3 rounded-full shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 10h11m4 0h3m-6 0a2 2 0 100-4 2 2 0 000 4zm0 6h5m-10 0h1m4 0h3m-3 6a2 2 0 100-4 2 2 0 000 4zm0-10V4m0 14v-4"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-2 mt-4 text-gray-800">
                      UI/UX Intern
                    </h4>
                    <p className="text-gray-600 mb-2">
                      PT Crossnet Indonesia | January 2024 - June 2024
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Designing UI/UX Application of Mobile App.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 my-12"></div>
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="bg-customBlue flex items-center justify-center py-5"
          >
            {/* My Projects */}
            <div className="container mx-auto text-center px-4 sm:px-6 lg:px-12">
              <h2 className="text-4xl font-bold mb-6 text-white">
                My Projects
              </h2>
              <p className="text-lg text-white text-gray-600 mb-12">
                A showcase of the work and accomplishments I've been proud to
                contribute to.
              </p>

              {/* Card Projects */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center max-w-screen-lg mx-auto">
                {/* Project 2 */}
                <div className="relative bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 mx-auto">
                  {/* Gambar Proyek */}
                  <img
                    src="/home.png"
                    alt="Inventory Management System"
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold mb-2 mt-4 text-gray-800">
                      Sales and Inventory Management System
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Built using Laravel and MySQL
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Implemented an inventory management system that supports
                      real-time stock tracking, supplier management, and
                      purchase order generation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="bg-customBlue flex items-center justify-center py-5"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              {/* Header */}
              <div className="border-t border-gray-300 my-12"></div>

              <h2 className="text-4xl font-bold text-center mb-12 text-white">
                Contact Me
              </h2>
              <p className="text-lg text-white text-center text-gray-600 mb-12">
                Feel free to reach out to me for collaborations, questions, or
                just to say hi!
              </p>

              {/* Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form Kontak */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <form>
                    {/* Nama */}
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Your name"
                      />
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Your email address"
                      />
                    </div>
                    {/* Pesan */}
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                    {/* Tombol Kirim */}
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md css-button-rounded--sky"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Informasi Kontak */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 mr-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.016 7.44l-4-4L4.44 11.016l4 4L16.016 7.44z"
                      />
                    </svg>
                    <span className="text-lg text-white">
                      +62 823 3025 5171
                    </span>
                  </div>
                  <div className="flex items-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 mr-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h11m4 0h3m-6 0a2 2 0 100-4 2 2 0 000 4zm0 6h5m-10 0h1m4 0h3m-3 6a2 2 0 100-4 2 2 0 000 4zm0-10V4m0 14v-4"
                      />
                    </svg>
                    <span className="text-lg text-white">
                      gomelkevin@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 mr-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 2a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2h8z"
                      />
                    </svg>
                    <span className="text-lg text-white">
                      Surabaya, Indonesia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.305 3.495.998.107-.775.418-1.305.76-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.47-2.382 1.236-3.22-.124-.303-.536-1.523.116-3.176 0 0 1.01-.322 3.3 1.23a11.48 11.48 0 0 1 3.003-.404c1.02.005 2.045.137 3.003.404 2.29-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.478 5.92.43.372.813 1.103.813 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                <a
                  href="https://instagram.com/kevingomell"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.434.405a4.92 4.92 0 011.772 1.772c.165.465.351 1.265.405 2.434.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.405 2.434a4.92 4.92 0 01-1.772 1.772c-.465.165-1.265.351-2.434.405-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.434-.405a4.92 4.92 0 01-1.772-1.772c-.165-.465-.351-1.265-.405-2.434-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.97.405-2.434a4.92 4.92 0 011.772-1.772c.465-.165 1.265-.351 2.434-.405 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.756 0 8.333.012 7.052.07 5.77.128 4.878.312 4.147.601a7.08 7.08 0 00-2.566 2.566c-.289.731-.473 1.623-.531 2.905-.058 1.281-.07 1.704-.07 4.878s.012 3.598.07 4.878c.058 1.281.242 2.173.531 2.905a7.08 7.08 0 002.566 2.566c.731.289 1.623.473 2.905.531 1.281.058 1.704.07 4.878.07s3.598-.012 4.878-.07c1.281-.058 2.173-.242 2.905-.531a7.08 7.08 0 002.566-2.566c.289-.731.473-1.623.531-2.905.058-1.281.07-1.704.07-4.878s-.012-3.598-.07-4.878c-.058-1.281-.242-2.173-.531-2.905a7.08 7.08 0 00-2.566-2.566c-.731-.289-1.623-.473-2.905-.531C15.598.012 15.175 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com/in/kevin-gomel-b01135291"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.98 0 1.772-.774 1.772-1.729V1.729C24 .774 23.205 0 22.225 0zM7.07 20.452H3.833V9.458H7.07v10.994zm-1.619-12.72a1.927 1.927 0 110-3.854 1.927 1.927 0 010 3.854zm14.774 12.72h-3.235v-5.465c0-1.302-.025-2.975-1.812-2.975-1.814 0-2.09 1.417-2.09 2.881v5.56h-3.235V9.458h3.106v1.503h.045c.433-.822 1.494-1.689 3.07-1.689 3.28 0 3.884 2.16 3.884 4.965v6.215z" />
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
