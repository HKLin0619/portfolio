import React from "react";
import { Box, Stack, Grid2 } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import Body1 from "../../components/Body1";

function SkillScreen({ data, id }) {
  const { title, language } = data;
  return (
    <Box
      id={id}
      sx={{
        bgcolor: "#f6f6f6",
      }}
    >
      <Box
        sx={{
          mt: { xs: 5, md: 15 },
          mb: { xs: 5, md: 15 },
          mr: { xs: 5, md: 35 },
          ml: { xs: 5, md: 35 },
        }}
      >
        <SectionTitle sx={{ mb: { xs: 5, md: 15 }, textAlign: "center" }}>
          {title}
        </SectionTitle>

        <Grid2
          container
          spacing={{ xs: 3, md: 6 }}
          columns={{ xs: 4, md: 16 }}
          alignItems="center"
        >
          {language.map((item, index) => (
            <Grid2 key={index} size={{ xs: 2, md: 4 }}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={{ xs: 2, md: 5 }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  style={{
                    maxWidth: "40%",
                    width: "100%",
                    height: "auto",
                  }}
                />
                <Body1>{item.name}</Body1>
              </Stack>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
}

export default SkillScreen;
