import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

export default function LottieAnimation() {
  const animationContainer = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Pastikan kode ini hanya berjalan di sisi klien
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    if (isClient && animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoprefixer: true,
        path: "/animations/home-animation.json",
      });
    }
  }, [isClient]);

  return (
    <div className="flex justify-center">
      <div
        ref={animationContainer}
        className="w-full sm:w-96 lg:w-80 h-auto lottie-container"
      ></div>
    </div>
  );
}
