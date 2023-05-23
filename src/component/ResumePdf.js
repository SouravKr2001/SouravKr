import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pdf from "../assets/sK.pdf";
import ResumeImg from "../assets/xyz.jpg";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';
// import ReactPdf from '@react-pdf/renderer';

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
