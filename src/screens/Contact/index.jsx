import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid2,
  Stack,
  TextField,
} from "@mui/material";
import Body2 from "../../components/Body2";
import SectionTitle from "../../components/SectionTitle";

function ContactScreen({ data }) {
  const { contact, info } = data;
  return (
    <Box
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
        <Stack direction="column" spacing={{ xs: 5, md: 10 }}>
          <Grid2 container spacing={{ xs: 1, md: 2 }}>
            {info.map((item, index) => (
              <Grid2 key={index} size={{ xs: 12, md: 4 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  {item.icon}
                  <Body2 sx={{ fontWeight: "bold" }}>{item.label} :</Body2>
                </Stack>
                <Body2 sx={{ mb: { xs: 1, md: 0 } }}> {item.name}</Body2>
              </Grid2>
            ))}
          </Grid2>

          <Divider />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack
              direction="column"
              spacing={5}
              sx={{ width: { xs: "100%", md: "50%" } }}
            >
              <SectionTitle sx={{ mb: { xs: 5, md: 15 }, textAlign: "center" }}>
                {contact.title}
              </SectionTitle>

              <Box sx={{ border: "2px solid black", borderRadius: 5, p: 5 }}>
                <Stack direction="column" spacing={2}>
                  <TextField
                    fullWidth
                    id="name"
                    label="Name"
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    id="email"
                    label="Email"
                    variant="outlined"
                  />
                  <TextField id="message" label="Message" multiline rows={6} />
                  <Button variant="contained" sx={{ bgcolor: "black" }}>
                    Submit
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default ContactScreen;
