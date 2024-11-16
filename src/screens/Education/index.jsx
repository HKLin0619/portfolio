import React from "react";
import { Box, Stack } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import Title from "../../components/Title";
import Body1 from "../../components/Body1";

function EducationScreen({ data, id }) {
  const { title, education } = data;

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

        <Stack spacing={10} sx={{ width: "100%" }}>
          {education.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: {
                  xs: "column",
                  md: index % 2 === 0 ? "row" : "row-reverse",
                },
                gap: { xs: 5, md: 0 },
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "40%" },
                  display: "flex",
                  justifyContent: {
                    md: index % 2 === 0 ? "left" : "right",
                  },
                  alignItems: "center",
                }}
              >
                <Box sx={{ border: "3px solid black", p: 2, borderRadius: 2 }}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </Box>
              </Box>

              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ width: { xs: "100%", md: "40%" }, gap: { xs: 4, md: 8 } }}
              >
                <Title sx={{ textAlign: "center" }}>{item.name}</Title>
                <Stack spacing={1} alignItems="center">
                  {item.description.map((item, index) => (
                    <Body1 key={index}>{item}</Body1>
                  ))}
                </Stack>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default EducationScreen;
