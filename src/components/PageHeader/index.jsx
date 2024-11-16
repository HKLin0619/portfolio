import React from "react";
import { Box, Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import PageTitle from "../PageTitle";

const PageHeader = ({ data }) => {
  const { title, breadcrumb_1, icon, breadcrumb_2 } = data;

  return (
    <Box
      sx={{
        bgcolor: "black",
        height: "25vh",
        p: 5,
      }}
    >
      <Box
        sx={{
          border: "3px solid white",
          borderRadius: 2,
          height: "97%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{ mt: 3 }}
          direction="column"
          spacing={1}
          alignItems="center"
        >
          <PageTitle>{title}</PageTitle>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator=">"
            sx={{
              color: "white",
              fontFamily: "sans-serif",
            }}
          >
            <Link
              href="/"
              color="white"
              underline="none"
              sx={{
                "&:hover": {
                  color: "red",
                },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                {icon}
                <span>{breadcrumb_1}</span>
              </Stack>
            </Link>
            <Typography color="red">{breadcrumb_2}</Typography>
          </Breadcrumbs>
        </Stack>
      </Box>
    </Box>
  );
};

export default PageHeader;
