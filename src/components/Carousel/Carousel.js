import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { data, sliderSettings } from "../../data/CarouselData";
import { Row, Heading, Section, TextWrapper } from "../../globalStyles";
import {
  ButtonContainer,
  ReviewSlider,
  ImageWrapper,
  CarouselImage,
  CardButton,
} from "./CarouselStyles";

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
      <Row justify="space-between" margin="1rem" wrap="wrap">
        <Heading width="auto" inverse>
          Find more about us
        </Heading>
        <ButtonContainer>
          <IconContext.Provider value={{ size: "3rem", color: "#F45B49" }}>
            <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
            <FaArrowCircleRight onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </Row>

      <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {data.map((el, index) => (
          <ImageWrapper key={index}>
            <CarouselImage src={el.image} />
            <TextWrapper size="1.1rem" margin="1rem 0 0" weight="bold">
              {el.title}
            </TextWrapper>
            <TextWrapper
              style={{ minHeight: "50px" }}
              size="0.9rem"
              margin="1rem 1.7rem"
              color="#4f4f4f"
            >
              {el.description}
            </TextWrapper>
            <CardButton>Learn More</CardButton>
          </ImageWrapper>
        ))}
      </ReviewSlider>
    </Section>
  );
};

export default Carousel;
