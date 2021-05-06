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
      </div>

      <p className="GitHublink">
        Here is my shopping cart Project on github{" "}
        <a className="gitHub" href="https://github.com/dino-bt/online_store.git">
          GitHub
        </a>{" "}
        created with HTML CSS and JavaScript
      </p>
    </div>
  );
};

export default Projects;
