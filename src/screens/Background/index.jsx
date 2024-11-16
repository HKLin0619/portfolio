import React from "react";
import { Box, Stack } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import Paragraph from "../../components/Paragraph";

function BackgroundScreen({ data, id }) {
  const { title, description } = data;

  return (
    <Box
      id={id}
      sx={{
        bgcolor: "white",
      }}
    >
      <Box
        sx={{
          mt: { xs: 5, md: 15 },
          mb: { xs: 5, md: 15 },
          mr: { xs: 5, md: 35 },
          ml: { xs: 5, md: 35 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SectionTitle>{title}</SectionTitle>
        </Box>

        <Stack spacing={3} sx={{ width: { xs: "100%", md: "50%" } }}>
          {description.map((item, index) => (
            <Paragraph key={index}>{item}</Paragraph>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default BackgroundScreen;
