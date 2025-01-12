import { Typewriter } from "react-simple-typewriter";
import dynamic from "next/dynamic";

// Dynamic import dengan SSR dinonaktifkan
const LottieAnimation = dynamic(() => import("../components/LottieAnimation"), {
  ssr: false,
});

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-customBlue flex items-center justify-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
              in Business Information System. I specialize in creating dynamic,
              responsive websites and have a strong passion for technology and
              design.
            </p>
          </div>
          <LottieAnimation />
        </div>
      </div>
    </section>
  );
}
