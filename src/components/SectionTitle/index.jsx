import React from "react";
import { Typography } from "@mui/material";

const SectionTitle = ({ children, sx, ...props }) => {
  return (
    <Typography
      sx={{
        color: "black",
        fontSize: { xs: "2rem", sm: "3rem" },
        fontFamily: "sans-serif",
        fontWeight: "bold",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default SectionTitle;
