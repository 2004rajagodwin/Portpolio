import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../GodwForm.css";
import useAOS from "../components/aoss"; // ✅ Import reusable AOS hook


const GodwForm = () => {
  useAOS(); // ✅ Initialize AOS
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="godw-rea-form-section">
      <div className="godw-rea-form-container row g-0">

        {/* LEFT SECTION */}
        <div className="godw-rea-form-left col-lg-5"  data-aos="fade-right">
          <h2><span>Get In</span> Touch</h2>
          <p>Have questions or ready to start your project? Reach out to our team of experts.</p>

          <div className="godw-rea-form-item">
            <i className="bi bi-geo-alt-fill"></i>
            <div>
              <h5>Our Location</h5>
              <p>2/242, Thisaiyanvilai, Thirunelveli</p>
            </div>
          </div>

          <div className="godw-rea-form-item">
            <i className="bi bi-telephone-fill"></i>
            <div>
              <h5>Phone Number</h5>
              <p>+91 6379362330</p>
            </div>
          </div>

          <div className="godw-rea-form-item">
            <i className="bi bi-envelope-fill"></i>
            <div>
              <h5>Email Address</h5>
              <p>godwinraja62@gmail.com</p>
            </div>
          </div>

          <div className="godw-rea-form-item">
            <i className="bi bi-clock-fill"></i>
            <div>
              <h5>Business Hours</h5>
              <p>Mon–Fri: 9:00 AM – 5:00 PM<br />Sat: 9:00 AM – 2:00 PM</p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="godw-rea-form-right col-lg-7"  data-aos="fade-left">
          <h2>Send Us a Message</h2>
          <p>Fill out the form below and we'll get back to you as soon as possible.</p>

          <form action="https://formsubmit.co/godwintech2004@gmail.com" method="POST">
            <div className="row g-3">

              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Service Required</label>
                <select
                  className="form-control"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>UI/UX Design</option>
                  <option>Digital Marketing</option>
                  <option>IT Consulting</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">Your Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12">
                <button type="submit" className="godw-rea-form-btn-submit mt-2">Submit</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GodwForm;
