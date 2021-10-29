import styled from "styled-components";
import { Container, Button } from "../../globalStyles";

export const HeroSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 24vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
`;

export const HeroVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  filter: brightness(0.7);
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
`;

export const HeroContainer = styled(Container)`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    height: 50%;
  }
`;

export const HeroText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.05em;
  color: #fff;
`;

export const HeroButton = styled(Button)`
  color: #fff;

  &:before {
    background: #f45b49;
    height: 500%;
  }
  &:hover:before {
    height: 0%;
  }
  &:hover {
    color: white;
  }
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;
