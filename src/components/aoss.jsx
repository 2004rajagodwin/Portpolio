// src/aoss.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation happens only once
      easing: "ease-in-out", // smooth easing
    });
  }, []);
};

export default useAOS;
