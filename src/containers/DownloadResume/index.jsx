import React from "react";
import { Button } from "@mui/material";
import { saveAs } from "file-saver";

function DownloadResumeContainer() {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        borderRadius: 2,
        width: { xs: "55%", md: "45%" },
        bgcolor: "black",
        color: "white",
      }}
      
      onClick={() => saveAs("/assets/doc/resume.pdf", "resume.pdf")}
    >
      Download Resume
    </Button>
  );
}

export default DownloadResumeContainer;
