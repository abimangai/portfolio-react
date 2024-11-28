
import styled from "styled-components";



const AboutSection=styled.section`
    width: 80%;
    margin: auto;
`;
const AboutContainer=styled.div`
    background-color: #000;
    margin-top:5%;
    box-shadow:0 0 20px #B336FF;
    border-radius: 10px;
`;
const EducationHead=styled.div`
   display:flex;
   align-items: center;
   margin-left: 5%;
   padding-top: 25px;
   gap:1rem;

   @media(max-width:570px){
    margin-bottom: 20px;
   }
  
`;
const EduCon=styled.div`
   width: 10px;
   height: 40px;
   background-color: #B336FF;
   border-radius: 5px;
`;
const EduContentHead=styled.h1`
   color:#B336FF;
   font-size:32px;

`;

const EducationContainer=styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    gap:2rem;
    text-align: center;

  @media(max-width:570px){
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    gap:0 rem;
}
  
`;
const EduContainer=styled.div`
     background-color: #000;
     padding:10px;
     border-radius: 10px;
     margin: 5%;
     width: 20%;
     height: 200px;
     border:1px solid #B336FF;
    &:hover{
        box-shadow:0 0 20px #B336FF;
    }
    @media(max-width:1080px) and (min-width:570px){
       width:30%;
       margin:2%;
       height: 230px;
    }

    @media(max-width:570px){
    width: 60%; 
    margin: 10px 0; 
    height: auto; 
    text-align: center;
    flex-direction: column;
    margin-bottom:50px;
  }
`;
const EduHead=styled.h1`
    color: #fff;
`;
const EduSchool=styled.p`
     color: #fff;
     padding-top:5%;
`;
const EduPercent=styled.div`
     color: #fff;
     box-shadow:0 0 2px #B336FF;
     margin-top: 20%;
     margin-bottom: 20%;
     padding: 5px;
     
`;
const Education = () => {
  return (
    <>
     <AboutSection>
    <AboutContainer>
       <EducationHead>
            <EduCon></EduCon>
            <EduContentHead>Education</EduContentHead>   
        </EducationHead>
       <EducationContainer>
        <EduContainer>
            <EduHead>SSLC</EduHead>
            <EduSchool>Sri Sri Vidya Mandir Matriculation School,Anaikoil</EduSchool>
            <EduPercent>Percentage: 95.8%</EduPercent>
        </EduContainer>
        <EduContainer>
            <EduHead>HSC</EduHead>
            <EduSchool>Kalaimahal Matriculation Hr. Sec. School , Sembanarkoil</EduSchool>
            <EduPercent>Percentage: 73.6%</EduPercent>
        </EduContainer>
        <EduContainer>
            <EduHead>Graduate</EduHead>
            <EduSchool>PSN College of Engineering and Technology , Tirunelveli</EduSchool>
            <EduPercent>CGPA: 9.12</EduPercent>
        </EduContainer>
       </EducationContainer>
    </AboutContainer>
   </AboutSection>

    </>
  )
}

export default Education
