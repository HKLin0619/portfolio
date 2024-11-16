import React from "react";
import PageHeader from "../../components/PageHeader";
import { contentData, footerData } from "../../config/contentData";
import { Stack } from "@mui/material";
import ExperienceScreen from "../../screens/Experience";
import ProjectScreen from "../../screens/Project";
import FooterScreen from "../../screens/Footer";

function Work() {
  return (
    <Stack>
      <PageHeader data={contentData.work} />
      <ExperienceScreen data={contentData.work.experience} id="experience" />
      <ProjectScreen data={contentData.work.project} id="project"/>
      <FooterScreen data={footerData} />
    </Stack>
  );
}

export default Work;
