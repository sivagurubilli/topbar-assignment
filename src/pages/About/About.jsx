import React from "react";
import "./About.scss";
import PageBanner from "../../components/PageBanner/PageBanner";
import AboutSection from "../../components/AboutSection/AboutSection";
import Testinomial from "../../components/Testinomial/Testinomial";
import TestinomialSlider from "../../components/TestinomialSlider/TestinomialSlider";

const About = () => {
  return (
    <div>
      <div className="page">
        <PageBanner
          title={"about us"}
          breadCrumbs={[
            { label: "Home", link: "/" },
            { label: "about us", link: "/about us" },
          ]}
        />
        <AboutSection />
        <TestinomialSlider />
        <Testinomial />
      </div>
    </div>
  );
};

export default About;
