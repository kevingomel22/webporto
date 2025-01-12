import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-customBlue flex items-center justify-center px-4 sm:px-6 lg:px-12"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/profilepic.jpg"
              alt="About Kevin Gomel"
              width={300}
              height={300}
              className="rounded-lg shadow-lg object-cover w-full sm:w-1/2"
            />
          </div>
          <div>
            <p className="text-lg text-white leading-relaxed mb-6">
              Hello! My name is{" "}
              <span className="font-semibold text-indigo-600">Kevin Gomel</span>
              . I am a recent graduate in{" "}
              <span className="font-semibold text-indigo-600">
                Business Information System
              </span>
              . I enjoy building dynamic, user-friendly websites and solving
              problems with technology.
            </p>
            <p className="text-lg text-white leading-relaxed mb-6">
              My expertise includes front-end development, UI/UX design, and
              full-stack development. I am passionate about learning new
              technologies and collaborating on exciting projects.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white text-lg">
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">✔️</span> Fullstack
                Developer
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">✔️</span> Responsive
                Design
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">✔️</span> UI/UX Design
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">✔️</span> Team
                Collaboration
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 my-12"></div>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">My Experience</h2>
          <p className="text-lg text-white text-gray-600 mb-12">
            A highlight of my professional journey.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="relative bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
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
        </div>
        <div className="border-t border-gray-300 my-12"></div>
      </div>
    </section>
  );
}
