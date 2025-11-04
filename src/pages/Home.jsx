import { Link } from 'react-router-dom'
import GodwinTechSlider from '../components/GodwinTechSlider';
import About from '../pages/About'
import WhyChooseBrick from '../components/WhyChooseBrick'
import OurPro from '../components/OurPro';
import ImageHo from '../components/ImageHo';
import GodBlog from '../components/GodBlog';
import GodServi from '../components/GodServi';
import Godwcta from '../components/Godwcta';
import GodwForm from '../components/GodwForm';


  





const Home = () => {
  return (
    <div>
      {/* <section className="hero">
        <div className="container">
          <h1>Godwin Raja</h1>
          <p>Full Stack Web Developer & React Specialist</p>
          <p>Creating beautiful, functional, and user-friendly web applications</p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/projects" className="btn" style={{ marginRight: '1rem' }}>
              View My Work
            </Link>
            <Link to="/contact" className="btn" style={{ background: 'transparent', border: '2px solid white' }}>
              Get In Touch
            </Link>
          </div>
        </div>
      </section> */}


         <GodwinTechSlider />

<About/>

<WhyChooseBrick/>
<OurPro/> 
<ImageHo/>


<Godwcta/>
<GodServi/>

<GodBlog/>
<GodwForm/>





      {/* <section className="section">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <p>Creating responsive and interactive user interfaces using React, Vue.js, and modern CSS frameworks.</p>
            </div>
            <div className="skill-category">
              <h3>Backend Development</h3>
              <p>Building robust server-side applications with Node.js, Express, and various databases.</p>
            </div>
            <div className="skill-category">
              <h3>Full Stack Solutions</h3>
              <p>End-to-end web development from concept to deployment and maintenance.</p>
            </div>
          </div>
        </div>
      </section>   */}



<section>
  {/* ✅ Floating WhatsApp Button */}
<a
  href="https://wa.me/916379362330"
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="bi bi-whatsapp"></i>
</a>

</section>
      
    </div>

    
  )
}

export default Home