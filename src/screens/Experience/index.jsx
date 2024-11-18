import React from "react";
import { Box, Grid2, Stack } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SectionTitle from "../../components/SectionTitle";
import Title from "../../components/Title";
import Body2 from "../../components/Body2";

function ExperienceScreen({ data, id }) {
  const { title, work } = data;

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
        }}
      >
        <SectionTitle sx={{ mb: { xs: 5, md: 15 }, textAlign: "center" }}>
          {title}
        </SectionTitle>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Grid2 container spacing={5} columns={{ xs: 4, md: 8 }}>
            {work.map((item, index) => (
              <Grid2
                key={index}
                size={{ xs: 12, md: 4 }}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Box
                  sx={{
                    border: "2px solid black",
                    borderRadius: 2,
                    p: { xs: 3, md: 5 },
                    flex: 1,
                  }}
                >
                  <Stack direction="column" spacing={{ xs: 3, md: 5 }}>
                    <Title>{item.company}</Title>
                    <Grid2 container spacing={{ xs: 1, md: 2 }}>
                      <Grid2 size={{ xs: 12, md: 12 }}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <WorkIcon fontSize="small" />
                          <Body2 sx={{ fontWeight: "bold" }}>Work Type :</Body2>
                        </Stack>
                        <Body2 sx={{ mb: { xs: 1, md: 0 } }}>{item.type}</Body2>
                      </Grid2>

                      <Grid2 size={{ xs: 12, md: 12 }}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <AccessTimeIcon fontSize="small" />
                          <Body2 sx={{ fontWeight: "bold" }}> Time :</Body2>
                        </Stack>
                        <Body2 sx={{ mb: { xs: 1, md: 0 } }}>{item.time}</Body2>
                      </Grid2>
                    </Grid2>

                    <Stack spacing={2}>
                      {item.position.map((item, index) => (
                        <Stack key={index} direction="column">
                          <Body2 sx={{ fontWeight: "bold" }}>
                            Position : {item.name}
                          </Body2>
                          <Stack spacing={1.5}>
                            {item.description.map((item, index) => (
                              <Body2
                                key={index}
                                sx={{
                                  lineHeight: 1.5,
                                  textAlign: "justify",
                                  textIndent: "-0.5rem",
                                  paddingLeft: "2rem",
                                  "&::before": {
                                    content: '"- "',
                                    display: "inline-block",
                                    width: "0.5rem",
                                  },
                                }}
                              >
                                {item}
                              </Body2>
                            ))}
                          </Stack>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>
    </Box>
  );
}
export default ExperienceScreen;
