import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ProjectCardData from "./ProjectCardData";
import "./ProjectCard.css";

const ProjectCard = () => {
  const [descriptions, setDescriptions] = useState(
    Array(ProjectCardData.length).fill(false)
  );

  const handleDescription = (index) => {
    setDescriptions((prev) => {
      const updatedDescriptions = [...prev];
      updatedDescriptions[index] = !updatedDescriptions[index];
      return updatedDescriptions;
    });
  };

  return (
    <div className="project">
      <h1 className="h">Projects</h1>
      <div className="card-container">
        {ProjectCardData.map((val, index) => {
          return (
            <div
              className="card"
              style={{
                backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${val.img})`,
                backgroundSize: "cover",
              }}
            >
              {" "}
              <p>{val.title}</p>
              {descriptions[index] ? (
                <p className="description">{val.description}</p>
              ) : (
                ""
              )}
              <div className="btn_grp">
                <Button
                  variant="outlined"
                  className="outlined_btn"
                  onClick={() => handleDescription(index)}
                >
                  {descriptions[index] ? "Hide Details" : "Details"}
                </Button>
                <Link to={val.view} className="btn">
                  View Project
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
