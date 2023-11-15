import React from "react";
import pdf from "../assets/Resume_Sourav Kumar.pdf";
import ResumeImg from "../assets/ResumeImg.jpg";
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

import "./ResumePdf.css";

function ResumePdf() {
  return (
    <div className="maincontainer">
      <div className="innerContainer">
        <a href={pdf} target="_blank" rel="noreferrer">
          <img className="imgResume" src={ResumeImg} />
        </a>
      </div>
      <div className="download">
        <a href={pdf} download="SouravKumar_Resume">
          <Button variant="contained" startIcon={<DownloadIcon />}>
          Dowload Resume
          </Button>
        </a>
      </div>
    </div>
  );
}

export default ResumePdf;
