// import React from 'react'
// import certificateData from "../Certificate.json";
// import styled from 'styled-components';

// const certificate = () => {
//     const getImage=(image)=>{
//         return new URL(`../assets/projects/${image}`,import.meta.url).href;
  
//   return (
//     <>
//     <CertificateSection>
//       <CertificateContainer>
      
//         <CertificateHead>
//           <CertificateDot></CertificateDot>
//           <TitleProject>Certificates</TitleProject>
//         </CertificateHead>

//         <Carousel
//         infinite={true}
//         showDots={false}
//         responsive={responsive}
//         autoPlay={true}
//         itemClass="carousel-item"
//         containerClass="carousel-container"
//         transitionDuration={100}

//         >
//           {projectData.map((project) => (
            
//             <CertificateCont to={project.link} key={project.projectId}>
//               <CertificateLogo src={getImage(project.image) } alt={project.projectName} />
//               <CertificateName to={project.link}>{project.projectName}</CertificateName>
//               <CertificateDescription>{project.description}</CertificateDescription>
//             </CertificateCont>
//           ))}
          
//          </Carousel>
     
//       </CertificateContainer>
//     </CertificateSection>
//  </>
//   );
// };

// export default certificate


import React from "react";
import certificateData from "../Certificate.json";
import styled from "styled-components";
import Carousel from "react-multi-carousel"; // Importing carousel library
import "react-multi-carousel/lib/styles.css"; // Carousel styles

const Certificate = () => {
  const getImage = (image) => {
    return new URL(`../assets/certificates/${image}`, import.meta.url).href;
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    tab: {
      breakpoint: { max:580, min: 500 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <CertificateSection>
        <CertificateContainer>
          <CertificateHead>
            <CertificateDot></CertificateDot>
            <TitleProject>Certificates</TitleProject>
          </CertificateHead>

          <Carousel
            infinite={true}
            showDots={false}
            responsive={responsive}
            autoPlay={true}
            itemClass="carousel-item"
            containerClass="carousel-container"
            transitionDuration={100}
          >
            {certificateData.map((certificate) => (
              <CertificateCont
                href={certificate.link}
                key={certificate.CertificateId}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CertificateLogo
                  src={getImage(certificate.image)}
                  alt={certificate.CertificateName}
                />
                <CertificateName>{certificate.CertificateName}</CertificateName>
                {/* <CertificateDescription>
                  {certificate.description}
                </CertificateDescription> */}
              </CertificateCont>
            ))}
          </Carousel>
        </CertificateContainer>
      </CertificateSection>
    </>
  );
};

export default Certificate;

// Styled components
const CertificateSection = styled.section`
  padding-top: 2rem;
`;

const CertificateContainer = styled.div`
 
  margin:  auto;
  width: 80%;
  background-color: #000;
  border-radius: 10px;
  box-shadow:0 0 40px #B336FF;
  padding-bottom:40px;
`;

const CertificateHead = styled.div`
   display:flex;
   align-items: center;
   margin-left: 5%;
   padding-top: 25px;
   gap:1rem;
   padding-bottom:40px;
`;

const CertificateDot = styled.div`
   width: 10px;
   height: 40px;
   background-color: #B336FF;
   border-radius: 5px;
`;

const TitleProject = styled.h2`
  font-size: 2rem;
  color:  #B336FF;
`;

const CertificateCont = styled.div`
  text-decoration: none;
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  /* width:100%; */
  height:85%;
  border-radius: 8px;
  background: #fff;
  border-radius: 10px;
`;

const CertificateLogo = styled.img`
  width: 100%;
  height:300px;
  margin-bottom: 1rem;
  border: 1px solid #B336FF;

`;

const CertificateName = styled.h3`
  font-size: 1.2rem;
  color: #444;
`;

const CertificateDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;
