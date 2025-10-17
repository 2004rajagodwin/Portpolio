import React from "react";
import "../GodBlog.css";


import re1 from '../assets/logo-ava.jpg'; 
import re2 from '../assets/logo-reo-13.jpg'; 
import re3 from '../assets/soft-section4.webp'; 

const GodBlog = () => {
  const blogs = [
    {
      img: re1,
      date: "18 JUNE 2020",
      categoryIcon: "fa-bookmark",
      category: "WASHING",
      author: "BY ADMIN",
      comments: "3 COMMENTS",
      title: "Car wash is best to keep brand new car",
      desc: "A wonderful serenity has take possion of my entire souing like these sweet…",
    },
    {
      img: re2,
      date: "03 JUNE 2020",
      categoryIcon: "fa-filter",
      category: "FILTERS",
      author: "BY ADMIN",
      comments: "3 COMMENTS",
      title: "We provides best Interior car service",
      desc: "A wonderful serenity has take possion of my entire souing like these sweet…",
    },
    {
      img: re3,
      date: "03 JUNE 2020",
      categoryIcon: "fa-bookmark",
      category: "WASHING",
      author: "BY ADMIN",
      comments: "3 COMMENTS",
      title: "The different types of exterior car washes",
      desc: "A wonderful serenity has take possion of my entire souing like these sweet…",
    },
  ];

  return (
    <section className="godwin-techp-blog-section">
      <div className="tri-container">
        <h2 className="ava-godwin-blo-h2">Our Blog</h2>
        <div className="tri-row">
          {blogs.map((blog, index) => (
            <div key={index} className="tri-col">
              <img src={blog.img} alt={blog.title} className="tri-blog-img" />
              <div className="tri-date-ribbon">{blog.date}</div>
              <div className="tri-blog-content">
                <div className="tri-blog-meta">
                  <i className={`fa ${blog.categoryIcon}`}></i> {blog.category}
                  <i className="fa fa-user"></i> {blog.author}
                  <i className="fa fa-comments"></i> {blog.comments}
                </div>
                <h3 className="tri-blog-title">
                  <a href="#">{blog.title}</a>
                </h3>
                <p className="tri-blog-desc">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GodBlog;
