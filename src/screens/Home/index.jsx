import React from "react";
import { Typography, Box, Stack, IconButton } from "@mui/material";
import DownloadResumeContainer from "../../containers/DownloadResume";

function HomeScreen({ data }) {
  const { social } = data;
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          justifyContent: { xs: "center", md: "start" },
          alignItems: "center",
        }}
      >
        <Stack direction="column" spacing={10}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                color: "black",
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontFamily: "inherit",
                fontWeight: "bold",
              }}
            >
              Hello, It's Me
            </Typography>

            <Typography
              sx={{
                color: "black",
                fontSize: { xs: "3rem", md: "4rem" },
                fontFamily: "inherit",
                fontWeight: "bold",
              }}
            >
              Heng Kang Lin
            </Typography>

            <Typography
              sx={{
                color: "black",
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontFamily: "inherit",
                fontWeight: "bold",
              }}
            >
              And I'm a Fresh Graduate
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Stack direction="row" spacing={{ xs: 2, md: 5 }}>
              {social.map((item, index) => (
                <IconButton
                  key={index}
                  onClick={() => window.open(item.path, "_blank")}
                  size="small"
                  sx={{
                    color: "white",
                    bgcolor: "black",
                    border: "2px solid black",
                    borderRadius: "50%",
                    "&:hover": {
                      bgcolor: "white",
                      color: "black",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Stack>
            <DownloadResumeContainer />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default HomeScreen;
