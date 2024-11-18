import React from "react";
import { Box, Grid2, Stack, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import SectionTitle from "../../components/SectionTitle";
import Title from "../../components/Title";
import Body2 from "../../components/Body2";

function ProjectScreen({ data, id }) {
  const { title, project } = data;

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
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Grid2 container spacing={5} columns={{ xs: 4, md: 8 }}>
            {project.map((item, index) => (
              <Grid2
                key={index}
                size={{ md: 4, xs: 12 }}
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
                    <Title> {item.name}</Title>
                    <Grid2 container spacing={{ xs: 1, md: 2 }}>
                      <Grid2 size={{ xs: 12, md: 12 }}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <GitHubIcon />
                          <Body2 sx={{ fontWeight: "bold" }}>
                            Github :
                            {item.github ? (
                              <Link
                                href={item.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {item.github}
                              </Link>
                            ) : (
                              " -"
                            )}
                          </Body2>
                        </Stack>
                      </Grid2>
                    </Grid2>

                    <Stack>
                      <Body2 sx={{ fontWeight: "bold" }}>
                        Responsibilities :
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

export default ProjectScreen;
