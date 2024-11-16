import React from "react";
import PageHeader from "../../components/PageHeader";
import { contentData, footerData } from "../../config/contentData";
import { Stack } from "@mui/material";
import FooterScreen from "../../screens/Footer";
import ContactScreen from "../../screens/Contact";

function Contact() {
  return (
    <Stack>
      <PageHeader data={contentData.contact} />
      <ContactScreen data={contentData.contact}/>
      <FooterScreen data={footerData} />
    </Stack>
  );
}

export default Contact;
