import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";

function FooterScreen({ data }) {
  const { copyright, social } = data;

  return (
    <Box
      sx={{
        bgcolor: "black",
      }}
    >
      <Box
        sx={{
          mt: { xs: 3, md: 3 },
          mb: { xs: 3, md: 3 },
          mr: { xs: 3, md: 35 },
          ml: { xs: 3, md: 35 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "0.8rem", md: "1rem" },
              fontFamily: "initial",
              textAlign: "left",
            }}
          >
            {copyright}
          </Typography>
          <Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
            {social.map((item, index) => (
              <IconButton
                key={index}
                onClick={() => window.open(item.path, "_blank")}
                size="small"
                sx={{ color: "white" }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default FooterScreen;
