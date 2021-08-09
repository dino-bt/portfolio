import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import ProjectCards from "../components/projectCards";

//the index acts as the hompage About

export default function About() {
  return (
    <div>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-197620444-1"
      ></script>

      <Header />

      <div id="About">
        <div className="about">
          <div className="divTitle">
            <h1 className="title"> Daniel (Dino) Ben Tovim </h1>
          </div>
          <div id="picDiv" className="picDiv">
            <div className="insidePicDiv"></div>
            {/*<img className="dinoPic" src="/dinopic.jpg" alt="dinopic" /> */}
          </div>
          <div className="divAbout">
            <div className="innerDivAbout">
              <p className="bodyAbout">
                Driven by curiosity and the desire to constantly evolve both my
                skill set and style, I’m an aspiring full-stack web developer by
                day and electronic DJ by night. Passionate about software and
                technology as well as the progressive storytelling of electronic
                music – my capability is multi-faceted and when I’m not coding,
                I’m locked away in my studio producing tracks for an upcoming
                release.
                <br />
                <br />
                Not one to limit myself to possibility, I enjoy creating and
                developing solutions to allow for seamless user interfaces and a
                frictionless customer experience. I pride myself on experiential
                learning, having just completed a full-stack web development
                Bootcamp, achieving an average grade of 96%-my proficiency
                includes and is not limited to: <br />
                <br />
                <strong>
                  <ul className="listLanguages">
                    <li>HTML</li>
                    <li>CSS </li>
                    <li>JavaScript</li>
                    <li>React JS/Next Js</li>
                    <li>NodeJs/Express</li>
                    <li>MongoDB/Mongoose</li>
                  </ul>
                </strong>
                <br />
                <a
                  className="courseGrades"
                  href="https://www.hyperiondev.com/portfolio/62185/"
                >
                  Click here to check out my course grades.
                </a>
              </p>
            </div>
          </div>
          <br />
        </div>
      </div>

      <section id="projects-section" className="projects-section">
        <h1 className="projectsHeader">Here are my Projects</h1>

        <div className="projects-grid">
          <ProjectCards
            src="/itunes.jpg"
            title="Itunes Search Engine"
            responsive="Responsive"
            description="Project built with React Node JS and Express. Search iTunes
        fetches an API from the iTunes Api. Select your artist that
        you would like to see their content."
            href="https://dino-itunes-new.herokuapp.com/"
          />

          <ProjectCards
            src="/tanktop.jpg"
            title="BCM Track Display"
            responsive="Responsive"
            description="Built a monitoring solution on Ubuntu to provide status information of various services using API calls to third parties and a NodeJS API server to receive POST requests.
          A full-stack website was built on NodeJs and React."
            href="http://197.221.16.229:3000/"
          />


          <ProjectCards
            src="/learning.jpeg"
            title="Track Your Learning"
            responsive="Responsive"
            description="Full Authentication Login and Register website that tracks
        you're learning. Built with JavaScript React and
        Nodejs/Express."
            href="https://dino-learning-log.herokuapp.com/"
          />



          <ProjectCards
            src="/calculator.jpg"
            title="Calculator"
            responsive="Responsive"
            description="A project built with React Native. A basic layout of a
        calculator."
            href="https://dino-calculator.herokuapp.com/"
          />


          <ProjectCards
          src="/events.jpeg"
          title="TETRIS"
          responsive="Not Responsive only for Desktop"
          description="A Project built using React, replicates the famous tetris
    game. Please note that due to custimisation the project will
    only work on a desktop computer."
          href="https://whispering-anchorage-45288.herokuapp.com/"
        />
        <ProjectCards
          src="/todolist.jpg"
          title="To Do List"
          responsive="Responsive"
          description="A project built with React Native. It creates posts and is
    able to delete/complete Todo's from a list."
          href="https://dino-todo-list.herokuapp.com/"
        />





        </div>

      



      </section>

      <section id="contact" className="contact-section">
        <div className="contact-section-header">
          <h2>Thank you for your time.</h2>
          <p>Here are my contact details!</p>
        </div>
        <div className="contact-links">
          <a
            id="profile-link"
            href="https://github.com/dino-bt"
            target="_blank"
            className="btn contact-details"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dino-ben-tovim-a48bb067"
            target="_blank"
            className="btn contact-details"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="mailto:dinobentovim@gmail.com"
            className="btn contact-details"
          >
            <i className="fas fa-at"></i> Send a mail
          </a>
          <a href="tel:+27799277931" className="btn contact-details">
            <i className="fas fa-mobile-alt"></i> Call me
          </a>
        </div>
      </section>

      <footer>
        <p>Designed and Created by: Dino Ben Tovim</p>
        <a id="backToTop" href="#About">
          Back to the top
        </a>
      </footer>
    </div>
  );
}
