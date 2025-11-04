import React from "react";
import GodwForm from "../components/GodwForm"; // ✅ import your component
import "bootstrap/dist/css/bootstrap.min.css";
import '../contact.css';


const Contact = () => {
  return (
    <section className="godw-contact-page">
      <div className="container">
        <div className="text-center mb-2 mt-5">
          <h1 className="fw-bold" id="poq-colo">
            Contact <span className="text-primary-a">Us</span>
          </h1>
          <p>We’d love to hear from you — fill out the form below to get started.</p>
        </div>

        {/* ✅ Using your GodwForm component here */}
        <GodwForm />
      </div>
    </section>
  );
};

export default Contact;
