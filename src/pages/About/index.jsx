import React from "react";
import PageHeader from "../../components/PageHeader";
import { contentData, footerData } from "../../config/contentData";
import { Stack } from "@mui/material";
import BackgroundScreen from "../../screens/Background";
import SkillScreen from "../../screens/Skill";
import EducationScreen from "../../screens/Education";
import ActivityScreen from "../../screens/Activity";
import FooterScreen from "../../screens/Footer";

function About() {
  
  return (
    <Stack>
      <PageHeader data={contentData.about} />
      <BackgroundScreen data={contentData.about.background} id="background" />
      <EducationScreen data={contentData.about.education} id="education" />
      <ActivityScreen data={contentData.about.activity} id="activity" />
      <SkillScreen data={contentData.about.skill} id="skill" />
      <FooterScreen data={footerData} />
    </Stack>
  );
}

export default About;
