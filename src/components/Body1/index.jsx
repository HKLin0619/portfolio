import React from "react";
import { Typography } from "@mui/material";

const Body1 = ({ children, sx, ...props }) => {
  return (
    <Typography
      sx={{
        color: "black",
        fontSize: { xs: "1rem", md: "1.5rem" },
        fontFamily: "serif",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Body1;
