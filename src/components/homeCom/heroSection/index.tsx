import { MainCol, MainContainer, MainRow } from "components/common";
import {
  HeroButton,
  HeroHeading,
  HeroSectionWrapper,
  HeroCreativeText,
  TextDiv,
} from "./styled";
import Lottie from "react-lottie";
import { heroCardData } from "components/data";
import { HeroCard } from "components/common/card";
import { Navbar } from "components/common";
import { useEffect, useRef } from "react";
import { init } from "ityped";
import { motion } from "framer-motion";
import animationData from "../../../assets/lotties/srtars.json";

function HeroSection() {
  const textRef = useRef();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      color: "#fff",
    },
  };

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      strings: [
        "Full Stack Magician.",
        "Problem Solver.",
        "Visual Storyteller.",
        "Pixel Perfectionist.",
        "Knowledge Seeker.",
        "Continuous Learner.",
        "Big Thinker.",
        "Dream Chaser.",
      ],
    });
  }, []);

  return (
    <div>
      <HeroSectionWrapper>
        <Navbar />
        <MainContainer className="top-container">
          <MainRow>
            <MainCol lg={7}>
              <TextDiv
                initial={{ opacity: 0, x: -300, scale: 0.1, y: -100 }}
                animate={{ opacity: 1, x: 0, scale: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 220,
                }}
                exit={{ transition: { duration: 0.2 } }}
              >
                <HeroCreativeText>
                  CREATIVE MIND, CREATIVE WORKS.
                </HeroCreativeText>
                <HeroHeading>
                  Hey, I'm Abdullah - <br /> A &nbsp;
                  <span ref={textRef}></span>
                </HeroHeading>
              </TextDiv>
              <HeroButton
                initial={{ opacity: 0, x: -300, scale: 0.1, y: -100 }}
                animate={{ opacity: 1, x: 0, scale: 1, y: 0 }}
                transition={{
                  delay: 1,
                  type: "spring",
                  stiffness: 220,
                }}
                exit={{ transition: { duration: 0.2 } }}
              >
                GETTING STARTED
              </HeroButton>
            </MainCol>
            <MainCol lg={5}>
              <motion.div
                initial={{ opacity: 0, y: 200, scale: 1 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                exit={{ transition: { duration: 0.2 } }}
              >
                <Lottie options={defaultOptions} />
              </motion.div>
            </MainCol>
          </MainRow>
        </MainContainer>
      </HeroSectionWrapper>
      <MainContainer className="bottom-container">
        <MainRow>
          {heroCardData.map((item, index) => (
            <MainCol lg={5}>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <HeroCard item={item} index={index} />
              </motion.div>
            </MainCol>
          ))}
        </MainRow>
      </MainContainer>
    </div>
  );
}

export default HeroSection;
