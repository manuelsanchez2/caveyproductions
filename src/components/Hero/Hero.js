import React from "react";
import { Link } from "react-router-dom";
import { Button, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
  HeroContainer,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo
        src="./assets/videos/video-5.mp4"
        loop
        autoPlay
        muted
      ></HeroVideo>
      <HeroContainer>
        <MainHeading>
          Wondering how to make your music project grow faster?
        </MainHeading>
        <HeroText>
          We are serious about the way artists and music lovers share their
          passion for music.
        </HeroText>
        <ButtonWrapper>
          <a href="/#about">
            <Button>Get Started</Button>
          </a>
          <Link to="/contact">
            <HeroButton>Contact us</HeroButton>
          </Link>
        </ButtonWrapper>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
