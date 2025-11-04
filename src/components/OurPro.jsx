import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useAOS from "../components/aoss"; // ✅ Import reusable AOS hook
import strategyImg from "../assets/strategyImg.jpg";
import designImg from "../assets/designImg.jpg";
import growthImg from "../assets/growthImg.jpg";

import "../OurPro.css";

const OurPro = () => {
  useAOS(); // ✅ Initialize AOS
  const steps = [
    {
      id: 1,
      title: "Discovery & Strategy",
      description:
        "We begin by understanding your business goals and target audience to develop a customized digital strategy that aligns with your vision.",
      image: strategyImg,
    },
    {
      id: 2,
      title: "Design & Implementation",
      description:
        "Our team creates and executes the solution with attention to detail, ensuring optimal performance and user experience across all platforms.",
      image: designImg,
    },
    {
      id: 3,
      title: "Optimization & Growth",
      description:
        "After launch, we continuously monitor and refine your digital assets to maximize performance and drive sustainable business growth.",
      image: growthImg,
    },
  ];

  return (
    <section className="ourpro-section py-5">
      <div className="container">
        <div className="row align-items-start">
          {/* Left Side */}
          <div className="col-lg-6 mb-4" data-aos="fade-right">
            <span className="ourpro-subtitle d-inline-block mb-2">
              ★ OUR PROCESS
            </span>
            <h2 className="ourpro-title mb-3">
              Streamlined Approach to <br /> Digital Success
            </h2>
            <p className="ourpro-desc mb-4">
              We follow a systematic methodology to ensure your project delivers
              maximum impact and meets your business objectives effectively.
            </p>

            {/* React Router Link instead of button */}
            <Link to="/contact" className="ourpro-btn">
              Explore More
            </Link>
          </div>

          {/* Right Side */}
          <div className="col-lg-6" data-aos="fade-left">
            {steps.map((step) => (
              <div
                className="ourpro-step d-flex align-items-start mb-4"
                key={step.id}
              >
                <div className="ourpro-step-image me-3 position-relative">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="img-fluid rounded-4"
                  />
                  <span className="ourpro-step-number">{step.id}</span>
                </div>
                <div className="ourpro-step-content">
                  <h5 className="fw-bold mb-1">{step.title}</h5>
                  <p className="mb-0">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPro;
