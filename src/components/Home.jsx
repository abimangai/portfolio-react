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



const HomeSection=styled.section`
    /* background-color: #251d22; */
     margin-top:2%;
    

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
`;
const ResumeLogo=styled.img`
   cursor:pointer;
`;
const SocialMediaIcon=styled.div`
     justify-content: center;
     align-items: center;
     display: flex;
     gap:1rem;
     margin-left:35%;
     
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
 

`;
const LeftImg=styled.img`
   height:100%;
   width: 50%;
   box-shadow:0 0 20px #B336FF;
   border-radius: 5%;
   margin-left:20%;


`;
const Home = () => {
  return (
    <>
<HomeSection>
    <HomeContainer>
        <RightContainer>
            <RightTop>Hiii, I am <RightSpan>Abirami K </RightSpan> </RightTop>
            <RightMiddle>I am an enthusiastic person with positive attitude. I am passionate on creating websites . And I have stong communication skill <br/>where I can able to manage the clients. </RightMiddle>
            <IconContainer>
            <ResumeLogo src={ resume} alt=""/>
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

<About/>
<Project/>



    </>
  )
}

export default Home




          