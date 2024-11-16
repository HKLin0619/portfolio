import React from "react";
import { Typography } from "@mui/material";

const Body2 = ({ children, sx, ...props }) => {
  return (
    <Typography
      sx={{
        color: "black",
        fontSize: { xs: "1rem", md: "1.2rem" },
        fontFamily: "serif",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Body2;
