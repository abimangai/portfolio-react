
import styled from "styled-components";
import projectData from "../ProjectData.json";
import {Link} from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const ProjectSection = styled.section`
  width: 80%;
  margin: auto;
`;
const ProjectContainer = styled.div`
  background-color: #000;
  color: #fff;
  margin-top: 5%;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 0 20px #b336ff;
`;

const ProjectHead= styled.div`
   display:flex;
   align-items: center;
   margin-left:2%;
   padding-top: 25px;
   padding-bottom:30px;
   gap:1rem;
`;
const ProjectDot= styled.div`
   width: 10px;
   height: 40px;
   background-color: #B336FF;
   border-radius: 5px;
`;
const TitleProject = styled.h1`
 color:#b336ff;
 font-size:32px;
`;

const ProjectCont = styled(Link)`
  border: 1px solid #b336ff;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  width: 70%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items:center;
  text-decoration: none;
  color: #fff;
  box-shadow: 0 0 20px #b336ff;

`;

const ProjectLogo = styled.img`
  width: 50px;
  border-radius: 50%;
  height: 50px;
`;

const ProjectName = styled(Link)`
   color:#fff;
   text-decoration: none;
   font-weight: bold;
   font-size:20px;
   padding-top: 8px;
`;
const ProjectDescription = styled.p`
  padding-top: 20px;
`;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 500 },
    items: 2
  },
  tab: {
    breakpoint: { max: 700, min: 500 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1
  }
};

const Project = () => {
   const getImage=(image)=>{
      return new URL(`../assets/projects/${image}`,import.meta.url).href;
   }

  return (
    <ProjectSection id="project">
      <ProjectContainer>
        {/* <PojectContain> */}
        <ProjectHead>
          <ProjectDot></ProjectDot>
          <TitleProject>Projects</TitleProject>
        </ProjectHead>

        <Carousel
        infinite={true}
        showDots={false}
        responsive={responsive}
        autoPlay={true}
        itemClass="carousel-item"
        containerClass="carousel-container"
        transitionDuration={100}

        >
          {projectData.map((project) => (
            
            <ProjectCont to={project.link} key={project.projectId}>
              <ProjectLogo src={getImage(project.image) } alt={project.projectName} />
              <ProjectName to={project.link}>{project.projectName}</ProjectName>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectCont>
          ))}
            </Carousel>
        {/* </PojectContain> */}
      </ProjectContainer>
    </ProjectSection>
  );
};

export default Project;
