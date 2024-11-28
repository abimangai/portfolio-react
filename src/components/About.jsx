import AboutMe from "./AboutMe"
import Education from "./Education"
import styled from "styled-components"

const AboutSection=styled.section`
`;

const About = () => {
  return (
   <>
   <AboutSection id='about'>
    <AboutMe/>
    <Education/>
    </AboutSection>
   </>
  )
}

export default About
