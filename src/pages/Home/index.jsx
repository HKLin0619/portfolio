import React from "react";
import HomeScreen from "../../screens/Home";
import { contentData } from "../../config/contentData";

function Home() {
  return (
    <>
      <HomeScreen data={contentData.home} />
    </>
  );
}

export default Home;
