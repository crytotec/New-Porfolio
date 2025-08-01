// Home.jsx
import "./Home.css";
import avater from "../Images/avater.png";
import { designs, web } from "../items";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faEnvelope,
  faArrowAltCircleDown,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Simple in-view hook
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Home() {
  const [slide, setSlider] = useState(0);
  const [slide2, setSlide2] = useState(0);
  const webpages = 2;
  const itemsPerPage = 2;

  const next = () => {
    if (slide2 < web.length - webpages) {
      setSlide2((s) => s + 1);
    }
  };

  const prev = () => {
    if (slide2 > 0) {
      setSlide2((s) => s - 1);
    }
  };

  const nextSlider = () => {
    if (slide < designs.length - itemsPerPage) {
      setSlider((s) => s + 1);
    }
  };

  const prevSlider = () => {
    if (slide > 0) {
      setSlider((s) => s - 1);
    }
  };

  // in-view hooks for sections
  const { ref: heroRef, inView: heroVisible } = useInView(0.2);
  const { ref: aboutRef, inView: aboutVisible } = useInView(0.2);
  const { ref: skillsRef, inView: skillsVisible } = useInView(0.2);
  const { ref: servicesRef, inView: servicesVisible } = useInView(0.2);
  const { ref: contactRef, inView: contactVisible } = useInView(0.2);

  return (
    <div className="home-wrapper relative">
      {/* Hero */}
      <div
        className={`body popup ${heroVisible ? "visible" : ""}`}
        ref={heroRef}
      >
        <div className="section">
          <div className="section1">
            <p className="greeting">Hello</p>
            <h1 className="name">I'M Crytotec</h1>
            <h3 className="tagline">
              A Creative Web Developer & Graphics Designer
            </h3>
          </div>
          <div className="img">
            <img src={avater} alt="Avatar" className="image" />
          </div>
        </div>
      </div>

      {/* About */}
      <div
        className={`body popup ${aboutVisible ? "visible" : ""}`}
        ref={aboutRef}
      >
        <div className="section">
          <div className="img">
            <img src={avater} alt="Avatar" className="image" />
          </div>
          <div className="about">
            <p className="small-title">Who I Am??</p>
            <h1 className="name">I'M Crytotec</h1>
            <h3 className="description">
              I’m Crytotec, a creative web developer and graphics designer
              passionate about building visually striking and user-friendly
              digital experiences. With a strong eye for design and a love for
              clean code, I bring websites to life while also crafting standout
              visual designs for brands and businesses.
            </h3>
            <button className="download-btn">Download</button>
          </div>
        </div>
      </div>

      {/* Skills / Tools & Technologies */}
      <div
        className={`body popup ${skillsVisible ? "visible" : ""}`}
        ref={skillsRef}
      >
        <h1 className="section-heading">Tools & Technologies</h1>
        <div className="section">
          <div className="bgabout">
            <div className="about">
              <h1>🧑‍💻 Web Development</h1>
              <h2>
                I specialize in building modern, responsive websites using the
                latest technologies. My core skills include:
              </h2>
              <h3>HTML5 and CSS3 for structure and styling</h3>
              <h3>JavaScript (ES6+) for interactivity and dynamic features</h3>
              <h3>React.js for creating fast and scalable user interfaces</h3>
              <h3>Tailwind CSS for clean, utility-first styling</h3>
              <h3>Git and GitHub for version control and collaboration</h3>
              <h3>Vite for lightning-fast development setup</h3>
              <h3>
                Responsive design to ensure websites look great on all devices
              </h3>
            </div>
          </div>
          <div className="bgabout">
            <div className="about">
              <h1>🎨 Graphics Design</h1>
              <h2>
                I create eye-catching visuals that speak your brand’s voice. My
                design strengths include:
              </h2>
              <h3>Logo design and brand identity</h3>
              <h3>Flyers & posters for events and promotions</h3>
              <h3>Social media graphics</h3>
              <h3>Church and celebration flyers</h3>
              <h3>Business promotional materials</h3>
              <h3>Consistent branding and layout design</h3>
              <h3>Digital & print-ready assets</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div
        className={`body popup ${servicesVisible ? "visible" : ""}`}
        ref={servicesRef}
      >
        <h1 className="section-heading">How I Can Help</h1>
        <h1 className="section-subheading">Services</h1>

        <div className="section">
          {/* Web Design & Development */}
          <div className="bgabout">
            <div className="about">
              <h2>
                I offer both Web Development and Graphics Design, so organize
                your services under those two areas.
              </h2>
              <h1>🖥️ Web Design & Development</h1>
              <h4>
                I build responsive, modern, and user-friendly websites tailored
                to your business or personal brand. Whether it's a landing page,
                portfolio, or full website, I bring your ideas to life with
                clean code and appealing layouts.
              </h4>
            </div>
          </div>

          {/* Web Projects Slider */}
          <div className="bgabout">
            <div className="about">
              <div className="ite">
                <div className="controlremote">
                  <h1 onClick={prev}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                  </h1>
                  <h1 onClick={next}>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                  </h1>
                </div>
                {web.slice(slide2, slide2 + webpages).map((item) => (
                  <div key={item.id} className="project-card">
                    <img
                      src={item.img}
                      alt={item.description}
                      className="project-img"
                    />
                    <p>{item.description}</p>
                    <Link to={item.link}>
                      <h1 className="Link">{item.btn}</h1>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Graphics Design Slider */}
        <div className="section">
          <div className="bgabout">
            <div className="about">
              <h1>🎨 Graphics Design</h1>
              <h4>
                I create eye-catching visuals that speak your brand’s voice.
                From bold flyers to sleek social media designs, I handle all
                your design needs with creativity and precision.
              </h4>
            </div>
          </div>
          <div className="bgabout">
            <div className="about">
              <div className="ite">
                <div className="controlremote">
                  <h1 onClick={prevSlider}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                  </h1>
                  <h1 onClick={nextSlider}>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                  </h1>
                </div>
                {designs
                  .slice(slide, slide + itemsPerPage)
                  .map((item) => (
                    <div key={item.id} className="project-card">
                      <img
                        src={item.img}
                        alt={`design-${item.id}`}
                        className="project-img"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div
        className={`body popup ${contactVisible ? "visible" : ""}`}
        ref={contactRef}
      >
        <div className="contact">
          <h1>Contact Me</h1>
          <h3>Have a project?</h3>
          <h4>
            I’m always open to new projects, creative collaborations, or
            freelance opportunities.
          </h4>
          <h1>
            <FontAwesomeIcon icon={faArrowAltCircleDown} />
          </h1>
          <a
            href="mailto:seyioladimeji790@gmail.com"
            className="your-button-styles"
          >
            <h4>
              <FontAwesomeIcon icon={faEnvelope} /> Mail Me
            </h4>
          </a>
          <h4>
            <FontAwesomeIcon icon={faPhone} /> Phone: +2349062051901
          </h4>
          <a href="https://github.com/crytotec">
            <h4>
              <FontAwesomeIcon icon={faGithub} /> Github
            </h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
