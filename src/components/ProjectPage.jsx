import styled from "styled-components";
import projectData from "../ProjectData.json";
import {Link} from "react-router-dom";

// Styled Components
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
const PojectContain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 5%;;
`;
const ProjectCont = styled(Link)`
  border: 1px solid #b336ff;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items:center;
  /* height: 50px; */
  text-decoration: none;
  color: #fff;

  &:hover {
    box-shadow: 0 0 20px #b336ff;
  }
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


const ProjectPage = () => {
   const getImage=(image)=>{
      return new URL(`../assets/projects/${image}`,import.meta.url).href;
   }

  return (
    <ProjectSection>
      <ProjectContainer>
        <PojectContain>
          {projectData.map((project) => (
            <ProjectCont to={project.link} key={project.projectId}>
              <ProjectLogo src={getImage(project.image) } alt={project.projectName} />
              <ProjectName to={project.link}>{project.projectName}</ProjectName>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectCont>
          ))}
        </PojectContain>
      </ProjectContainer>
    </ProjectSection>
  );
};

export default ProjectPage;
