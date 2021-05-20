import Header from "../components/Header";
import Image from "next/image";

//here I add my projects into a card format making them look nice on display.

const Projects = () => {
  return (
    <div>
      <Header />
      <div className="inlineBlock">
        <div className="projectCatalogue">
          <div className="projectCard">
            <img src="/tanktop.jpg" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Catalogue project</h5>
              <p>
                Online sport wear shopping catalogue, created with vanilla
                Javascript, HTML, CSS
              </p>
              <br/>
              <br/>
              <a
                href="https://catalogue-dino.herokuapp.com/"
                className="btn btn-primary"
              >
                GO TO PROJECT
              </a>
            </div>
          </div>
        </div>
        <div className="projectLearning">
          <div className="projectCard">
            <img src="/learning.jpeg" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Track your learning project</h5>
              <p>
                Full Authentication Login and Register website that tracks your
                learning using Django and Python{" "}
              </p>
              <br/>
              <br/>
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
             Project built with React Node JS and express for fetching an API from itunes. 
             Select your artist that you would like to see there content.
            </p>
            <br/>
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
              A full stack MERN apllication, It has JWT authentication for registering and logging in.
              Displays new and upcoming events.
            </p>
            <br/>
            <a
              href="https://github.com/dino-bt/event"
              className="btn btn-primary"
              >
              GO TO PROJECT
            </a>
          </div>
        </div>
      </div>
      
      
      
      
      
      
      
      
      
      
      
        </div>

      <p className="GitHublink">
        Here is my Github Repo {" "}
        <a className="gitHub" href="https://github.com/dino-bt">
          GitHub
        </a>{" "}
        created with HTML CSS and JavaScript
      </p>
    </div>
  );
};

export default Projects;
