// In your Programs.js component


import React from "react";
import { useNavigate } from 'react-router-dom';
import { programsData } from '../../data/programsData.js';
import "./Programs.css";

import { useParams } from "react-router-dom";

const Programs = () => {
  const navigate = useNavigate();
  const { programId } = useParams();

  const handleReadMore = (programId) => {
    // Navigate to a new route and pass programId as a parameter
    console.log(programId);
    navigate(`/program/${programId}`);
  };

  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category" key={program.id}>
            <img src={program.image} alt={program.heading} />
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <div>
                <span onClick={() => handleReadMore(program.id)}>Read More...</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
