import styled from "styled-components";
import photoone from "../assets/photo 1.jpeg";
import phototwo from "../assets/photo 2.jpeg";
import photothree from "../assets/photo 3.jpeg";
import resume from "../assets/Resume.png";
import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import mail from "../assets/mail.png";
import { Link } from "react-router-dom";
import About from "./About";
import Project from "./Project";
import Certificate from "./certificate";
import ContactPage from "./ContactPage";



const HomeSection=styled.section`
    /* background-color: #251d22; */
     margin-top:5%;
    

`;
const HomeContainer=styled.div`
     display:flex;
     justify-content: space-between;
     align-items: center;
     background-color: #000;
     width:80%;
     margin:auto;
     border-radius: 10px;
     box-shadow:0 0 30px #B336FF;

     @media (max-width: 570px) {
        box-shadow:0 0 10px #B336FF;
        display: flex;
        justify-content: center;
        align-items: center;

     }
`;
const RightContainer=styled.div`
     background-color: #000;
     width: 62%;
     padding: 5%;
     border-radius: 10px;
     margin-bottom: 5%;
     margin-left:8%;
     margin-top:5%;
     box-shadow:0 0 40px #B336FF;

     @media (max-width: 570px) {
        box-shadow:0 0 3px #B336FF;
       
     }
     @media (max-width:1080px) {
       margin-left: 100px;
     }
     @media (max-width:850px) {
       margin-left: 90px;
     }
     @media (max-width:710px) {
       margin-left: 80px;
     }
     @media (max-width:640px) and (min-width:570px) {
       margin-left: 60px;
     }
     @media (max-width:570px) and (min-width:320px) {
       margin-left: 40px;
       
     }
     @media (max-width:450px) and (min-width:320px) {
      width: 200px;
       
     }
`;
const RightTop=styled.h1`
    color: #fff;
    font-size: 36px;
`;
const RightSpan=styled.span`
    color: #B336FF;
`;
const RightMiddle=styled.p`
    color: #fff;
    padding-top: 5%;
`;
const IconContainer=styled.div`
     justify-content:flex-start;
     align-items: center;
     display: flex;
     margin-top: 20px;

     @media (max-width:570px){
         flex-direction: column;
         /* width: 100%; */
         display:flex;
         margin: auto;
         justify-content: center;

     }
`;
const ResumeLogo=styled.img`
   cursor:pointer;
`;
const SocialMediaIcon=styled.div`
     justify-content: center;
     align-items: center;
     display: flex;
     gap:1rem;
     margin-left:20%;
     @media (max-width:570px){
        margin-left:0%;
     }
     
`;
const MediaIcon=styled(Link)`
  

`;
const MediaImg=styled.img`
    width: 16px;
    cursor:pointer;

`;
const LeftContainer=styled.div`
     background-color: #000;
     margin-left: 10%;


`;
const ImgContainer=styled.div`
 width: 100%;

`;
const LeftImg=styled.img`
   height:100%;
   width: 50%;
   box-shadow:0 0 20px #B336FF;
   border-radius: 5%;
   margin-left:20%;

   @media (max-width: 570px) {
       display:none;

     }
     @media (max-width:1080px) {
       display:none;

     }


`;
const Home = () => {
  return (
    <>
<HomeSection id="home">
    <HomeContainer>
        <RightContainer>
            <RightTop>Hiii, I am <RightSpan>Abirami K </RightSpan> </RightTop>
            <RightMiddle>Welcome to my portfolio website! This site has been created as a reference to showcase my skills, projects, and services. I hope it helps you get a better understanding of what I do and how I can assist you. Feel free to explore and reach out if you have any questions! </RightMiddle>
            <IconContainer>
                <a href="/portfolio/public/Resume.pdf" download="Resume.pdf">
                    <ResumeLogo src={resume} alt="Download Resume" />
                </a>
                <SocialMediaIcon >
                    <MediaIcon to= "https://www.linkedin.com/in/abirami2301/">
                     <MediaImg src={linkedin} alt=""/>
                    </MediaIcon>
                    
                    <MediaIcon to= "https://github.com/abimangai">
                     <MediaImg src={github} alt=""/>
                    </MediaIcon>

                    <MediaIcon to= "https://www.instagram.com/_abirami_mangai_/">
                     <MediaImg src={insta} alt=""/>
                    </MediaIcon>

                    <MediaIcon to= "mailto:abiramimangai1@gmail.com">
                     <MediaImg src={mail} alt=""/>
                    </MediaIcon>
                  
                </SocialMediaIcon>
            </IconContainer>
        </RightContainer>

        <LeftContainer>
            <ImgContainer>
            <LeftImg src={phototwo} alt=""/>
            </ImgContainer>
        </LeftContainer>
    </HomeContainer>
</HomeSection>

{/* <About/>
<Project/>
<Certificate/>
<ContactPage/> */}






    </>
  )
}

export default Home




          