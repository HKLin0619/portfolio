import React from "react";
import { Typography } from "@mui/material";

const PageTitle = ({ children, sx, ...props }) => {
  return (
    <Typography
      sx={{
        color: "white",
        fontSize: { xs: "2.5rem", sm: "3rem" },
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

export default PageTitle;
