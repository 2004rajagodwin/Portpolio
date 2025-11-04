import React, { useEffect } from "react";
import "../GodServi.css";
import { Link } from "react-router-dom";
import useAOS from "../components/aoss"; // ✅ Import reusable AOS hook



const GodServi = () => {

useAOS(); // ✅ Initialize AOS
  
  useEffect(() => {
    const serviceCols = document.querySelectorAll(".brick-new-ho-de-col");
    const container = document.querySelector(".brick-new-ho-de-flex");

    const handleMobileClick = (col) => {
      serviceCols.forEach((c) => c.classList.remove("expanded"));
      col.classList.add("expanded");
    };

    const handleDesktopHover = (col) => {
      serviceCols.forEach((c) => c.classList.remove("expanded"));
      col.classList.add("expanded");
    };

    if (window.innerWidth <= 768) {
      serviceCols.forEach((col) =>
        col.addEventListener("click", () => handleMobileClick(col))
      );
    } else {
      serviceCols.forEach((col) =>
        col.addEventListener("mouseenter", () => handleDesktopHover(col))
      );

      if (container) {
        container.addEventListener("mouseleave", () => {
          serviceCols.forEach((c) => c.classList.remove("expanded"));
          serviceCols[0].classList.add("expanded");
        });
      }
    }

    // Cleanup event listeners on unmount
    return () => {
      serviceCols.forEach((col) => {
        col.replaceWith(col.cloneNode(true));
      });
    };
  }, []);

  const services = [
    {
      title: "Web Design",
      desc: "The redefine, the construction industry through innovation, efficiency, and sustainability.",
      bgClass: "brick-new-ho-de-residential",
    },
    {
      title: "Secure Data Backup",
      desc: "High-quality commercial projects that redefine spaces for businesses to grow and thrive.",
      bgClass: "brick-new-ho-de-commercial",
    },
    {
      title: "Data Security Solutions",
      desc: "Building strong and sustainable spaces for education, healthcare, and public services.",
      bgClass: "brick-new-ho-de-institutional",
    },
    {
      title: "Digital Marketing",
      desc: "Creating efficient industrial facilities to power manufacturing and large-scale industries.",
      bgClass: "brick-new-ho-de-industrial",
    },
    {
      title: "Hosting Services",
      desc: "Providing additional tailored solutions to meet diverse construction needs.",
      bgClass: "brick-new-ho-de-other",
    },
  ];

  return (
   <section className="why-ch-brick-main-section-boq"data-aos="fade-up" >
     <div className="container brick-new-ho-de-services">
      <h6 className="text-warning-a">OUR AWESOME SERVICES</h6>
      <h2 className="fw-bold mb-5">
        Comprehensive solutions for Every Websites Need
      </h2>

      <div className="d-flex brick-new-ho-de-flex">
        {services.map((service, index) => (
          <div
            key={index}
            className={`brick-new-ho-de-col ${index === 0 ? "expanded" : ""}`}
          >
            <div className={`brick-new-ho-de-card ${service.bgClass}`}>
              <div className="brick-new-ho-de-overlay"></div>
              <div className="brick-new-ho-de-title">{service.title}</div>
              <div className="brick-new-ho-de-content">
                <h5>{service.title}</h5>
                <p>{service.desc}</p>
               


  <Link to="/contact" className="brick-new-ho-de-card-btaa" >
         Explore more →
            </Link>


                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   </section>
  );
};

export default GodServi;
