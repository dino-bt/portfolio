import React from "react";

const ProjectCards = ({ src, title, responsive, description, href }) => {
  return (
    <div className="projectCatalogue">
      <div className="projectCard">
        <img src={src} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h5>{responsive}</h5>
          <br />
          <p className="pTag">{description}</p>
          <div className="buttonPad">
            <div></div>
          </div>

         
        </div>

      </div>
      <div className = "buttonDiv">
      <a href={href} className="btn btn-primary">
        GO TO PROJECT
      </a>
      </div>
    </div>
  );
};

export default ProjectCards;