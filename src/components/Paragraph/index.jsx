import React from "react";
import { Typography } from "@mui/material";

const Paragraph = ({ children, sx, ...props }) => {
  return (
    <Typography
      sx={{
        color: "black",
        fontSize: { xs: "1rem", sm: "1.5rem" },
        fontFamily: "serif",
        lineHeight: 1.5,
        textAlign: "justify",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Paragraph;
