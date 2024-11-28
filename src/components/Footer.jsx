import styled from "styled-components";
import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import mail from "../assets/mail.png";

const FooterSection=styled.section`

`;
const FooterContainer=styled.div`
background-color: #000;
box-shadow:0 0 30px #B336FF;
color:#fff;
margin: auto;
width: 82%;
margin-top: 2%;
border-radius: 10px;
padding: 2%;

`;
const FooterContain =styled.div`
display:flex;
align-items: center;
justify-content: center;
gap:2rem;

@media(max-width:610px) and (min-width:320px){
  flex-direction:column;
}
`;
const MailContainer =styled.div`
display:flex;
gap: 1rem;
`;
const MailImage =styled.img`

@media(max-width:450px) and (min-width:320px){
  width:12px;
}
`;
const FooterEmail =styled.h4`

@media(max-width:450px) and (min-width:320px){
font-size:14px;
}
`;
const FooterLogoContainer =styled.div`
display:flex;
justify-content:space-between;
align-items: center;
gap:1rem;
`;
const Img =styled.img`
gap:1rem;
`;
const CopyRight=styled.p`
align-items: center;
text-align: center;
padding-top: 20px;
`;
const Footer = () => {
  return (
    <>
    <FooterSection>
        <FooterContainer>
            <FooterContain>

                <MailContainer>
                <MailImage src={mail} alt=""/>
                <FooterEmail>abiramimangai1@gmail.com | 987654321</FooterEmail>
                </MailContainer>

                <FooterLogoContainer>
                       <Img src={insta} alt=""/>
                       <Img src={linkedin} alt=""/>
                       <Img src={github} alt=""/>
                </FooterLogoContainer>
            </FooterContain>
            <CopyRight>Made by me.....</CopyRight>
        </FooterContainer>
    </FooterSection>
    </>
  )
}

export default Footer
