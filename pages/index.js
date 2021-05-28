import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

//the index acts as the hompage About

export default function About() {
  return (
    <div>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-197620444-1"
      ></script>

      <Header />

      <div id="about" className="about">
        <div className="divTitle">
          <h1 className="title"> Daniel (Dino) Ben Tovim </h1>
        </div>
        <div className="picDiv">
          <img className="dinoPic" src="/dinopic.jpg" alt="dinopic" />
        </div>
        <p className="bodyAbout">
          Hello, my name is Dino Ben Tovim, I have currently finished a Full
          Stack Web Developer Bootcamp Course at Hyperion dev. I have finished
          with avg grade of 98%.
          <br />
          <br />
          I have learnt a lot in these last three months and have built
          projects. I have learnt how to write HTML, CSS, Javascript, ExpressJS,
          NodeJs, React Native/Next and Mongoose/MongoDB. I am ready to start a
          new career in the IT sector. This is a new venture for me as I have
          been in music and performance arts for most of my professional life.
          When covid-19 happened I decided after some time that I want to
          explore another avenue in my life and decided to learn Web
          Development.
          <br />I made a successful career out of my Djing but sometimes in life
          things change and they are out of your control. I am hardworking and
          persistent and whatever life throws at me I will finish what I started
          this is my way of life.
        </p>
        <br />
        <style jsx>{`
          p {
            color: dark-grey;
          }

          h1 {
            margin-top: 100px;

            color: black;
          }
        `}</style>
      </div>

      <section id="projects-section" className="projects-section">
        <h1 className="projectsHeader">Here are my Projects</h1>

        <div className="projects-grid">
          <div className="projectCatalogue">
            <div className="projectCard">
              <img src="/tanktop.jpg" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Catalogue project</h5>
                <p>
                  Online sport wear shopping catalogue, created with vanilla
                  Javascript, HTML, CSS
                </p>
                <br />
                <br />
               
                <a
                  href="https://catalogue-dino.herokuapp.com/"
                  className="btn btn-primary"
                >
                  GO TO PROJECT
                </a>
              </div>
            </div>
          </div>
          <div className="projectCatalogue">
            <div className="projectCard">
              <img src="/learning.jpeg" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Track your learning project</h5>
                <p>
                  Full Authentication Login and Register website that tracks
                  your learning using Django and Python{" "}
                </p>
                <br />
                <br />
                <a
                  href="https://dino-learning-log.herokuapp.com/"
                  className="btn btn-primary"
                >
                  GO TO PROJECT
                </a>
              </div>
            </div>
          </div>
          <style jsx>{`
            p {
              color: grey;
            }
          `}</style>

          <div className="projectCatalogue">
            <div className="projectCard">
              <img src="/itunes.jpg" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Itunes Search Engine</h5>
                <p>
                  Project built with React Node JS and express for fetching an
                  API from itunes. Select your artist that you would like to see
                  there content.
                </p>
                <br />
                <a
                  href="https://github.com/dino-bt/Itunes-Search-Engine.git"
                  className="btn btn-primary"
                >
                  GO TO PROJECT
                </a>
              </div>
            </div>
          </div>

          <div className="projectCatalogue">
            <div className="projectCard">
              <img src="/events.jpg" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Event Updates</h5>
                <p>
                  A full stack MERN apllication, It has JWT authentication for
                  registering and logging in. Displays new and upcoming events.
                </p>
                <br />
                <a
                  href="https://github.com/dino-bt/event"
                  className="btn btn-primary"
                >
                  GO TO PROJECT
                </a>
              </div>
            </div>
          </div>
        
        
          <div className="projectCatalogue">
            <div className="projectCard">
              <img src="/todolist.jpg" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">To Do List</h5>
                <p>
                  A project built with React Native.
                  It creates posts and is able to delete/complete todo's from a list. 
                </p>
                <br />
                <br />
                <a
                  href="https://dino-todo-list.herokuapp.com/"
                  className="btn btn-primary"
                >
                  GO TO PROJECT
                </a>
              </div>
            </div>
          </div>

          <div className="projectCatalogue">
            <div className="projectCard">
              <img src="/calculator.jpg" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Calculator</h5>
                <p>
                  A project built with React Native.
                  Online Calculator it can add, multiply, divide and subract. 
                </p>
                <br />
                <br />
                <a
                  href="https://dino-calculator.herokuapp.com/"
                  className="btn btn-primary"
                >
                  GO TO PROJECT
                </a>
              </div>
            </div>
          </div>



        
        
        
        
        
        
        
          </div>

       


      </section>

      <section id="contact" className="contact-section">
        <div className="contact-section-header">
          <h2>Thank you for your time.</h2>
          <p>Here are my contact details!</p>
        </div>
        <div className="contact-links">
          <a
            href="https://www.facebook.com/dinobt"
            target="_blank"
            className="btn contact-details"
          >
            <i className="fab fa-facebook-square"></i> Facebook
          </a>
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
          <a href="mailto:dinobentovim@gmail.com" className="btn contact-details">
            <i className="fas fa-at"></i> Send a mail
          </a>
          <a href="tel:+27799277931" className="btn contact-details">
            <i className="fas fa-mobile-alt"></i> Call me
          </a>
        </div>
      </section>

      <footer>
  
  <p>
   
    <a id="backToTop" href="#about" target="_blank">
    Back to the top 
      
    </a>
  </p>
</footer>




    </div>
  );
}
