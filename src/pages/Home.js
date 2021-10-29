import React from "react";
import { Content } from "../components/Content/Content";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import { sectionOne, sectionTwo, sectionThree } from "../data/SectionData";

// 4 components: Hero, Features, Content, Carousel

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Content {...sectionOne} />
      <Content {...sectionTwo} />
      <Content {...sectionThree} />
    </>
  );
};

export default Home;
