import styled from 'styled-components';
import leftarrow from "../assets/left-arrow.jpg";
import rightarrow from "../assets/right-arrow.webp";

const AboutSection=styled.section`
  
`;
const AboutContainer=styled.div`
   width: 80%;
   margin: auto;
   background-color:#000;
   box-shadow:0 0 20px #B336FF;
   border-radius: 10px;
   margin-bottom:40px;
   margin-top: 40px;
   padding-bottom: 40px;
   
`;
const AboutContain=styled.div`

`;

const AboutTop=styled.div`
   display:flex;
   align-items: center;
   margin-left: 5%;
   padding-top: 25px;
   gap:1rem;
`;
const AboutDiv=styled.div`
   width: 10px;
   height: 40px;
   background-color: #B336FF;
   border-radius: 5px;
   
`;
const AboutMeTitle=styled.h1`
   color: #B336FF;
   font-size: 32px;
  
`;
const AboutCont=styled.div`
  
`;
const AboutMeParaOne=styled.div`
   display:flex;
   align-items: center;
   justify-content: space-around;
 
`;
const AboutPara=styled.p`
  color:#fff;
  width:30%;
  margin-left:60px;
  margin-top:30px;
  padding: 40px;
  box-shadow:0px 0px 20px #B336FF;
  border-radius:10px;
  height:100%;

  @media(max-width:570px){
    height:100%;
    width: 50%;
    padding: 20px;
    margin-left:0px;
  }
`;

const AboutArrow=styled.img`


  
  @media(max-width:1100px )and (min-width:680px){
    width: 200px;
  }
  @media(max-width:680px )and (min-width:570px){
    width: 140px;
  }
  @media(max-width:570px){
 display:none;
  }

`;

const AboutMeParaTwo=styled.div`
  display:flex;
  align-items: center;
  justify-content: space-around;


  @media(max-width:570px){
    height:100%;
    width: 100%;
    
    
   
  }
 
`;
const AboutParaa=styled.p`
  color:#fff;
  width:30%;
  margin-right: 40px;
  margin-top:30px;
  padding: 40px;
  box-shadow:0px 0px 20px #B336FF;
  border-radius:10px;
  height:100%;

  @media(max-width:570px){
    height:100%;
    width: 50%;
    padding: 20px;
    margin-right: 0px;
  }
`;


const AboutMe = () => {
  return (
   <>
   
   <AboutSection>
    <AboutContainer>
      <AboutContain>
       <AboutTop>
        <AboutDiv></AboutDiv>
       <AboutMeTitle>About Me..</AboutMeTitle>
       </AboutTop>

        <AboutCont>
          <AboutMeParaOne>
          <AboutPara>
          Hello! I’m a passionate Computer Science Engineering graduate 
          and an enthusiastic front-end developer with a strong foundation 
          in web development, design, and technologies like React.js, JavaScript, HTML, and CSS.  
          </AboutPara>
          <AboutArrow src={rightarrow} alt="arrow"/>  
          </AboutMeParaOne>

          <AboutMeParaTwo>
            <AboutArrow src={leftarrow} alt="arrow"/>
          <AboutParaa>
          I bring to the table a combination of technical proficiency and soft skills, including 
          effective communication, team collaboration, and client management. 
          My professional journey includes an enriching internship at Talrop (Techies Park) in Kerala,
           where I gained hands-on experience in React.js, Python, and Django. 
           </AboutParaa>   
          </AboutMeParaTwo>

          <AboutMeParaOne>
          <AboutPara>
          Having completed my HR and Project Management course on the Great Learning platform, 
          I’ve developed a keen understanding of leadership, team coordination, and operational efficiency.
           Programs like Mahindra Pride Classroom and Project Punch have further enhanced my personality, 
           communication skills.

           </AboutPara>  
           <AboutArrow src={rightarrow} alt="arrow"/>     
          </AboutMeParaOne>
          

        </AboutCont>
      </AboutContain>
    </AboutContainer>
   </AboutSection>
   
   </>
  )
}

export default AboutMe
