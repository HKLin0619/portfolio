import React from "react";
import { Typography } from "@mui/material";

const Title = ({ children, sx, ...props }) => {
  return (
    <Typography
      sx={{
        color: "black",
        fontSize: { xs: "1.5rem", md: "2rem" },
        fontFamily: "serif",
        fontWeight: "bold",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Title;
