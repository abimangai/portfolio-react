// import styled from "styled-components";
// import { Link } from "react-scroll";


// const NavBar=styled.section`
//    margin: 2%;
//    padding-top: 20px;
// `;
// const Nav=styled.div`
//     display:flex;
//     justify-content: space-between;
//     padding: 20px 30px;
//     box-shadow:0 0 20px #B336FF;
//     background-color: #000;
//     width:80%;
//     margin:auto;
//     border-radius: 10px;
  
 
// `;
// const NavLogo=styled.h1`
//     color: #B336FF;
   
// `;

// const NavListContainer=styled.div`
    
// `;
// const NavList=styled.ul`
//      display:flex;
//     justify-content:space-between;
//     align-items: center;
//     gap:2rem;
// `;
// const ListName=styled(Link)`
//     color: #fff;
//     list-style: none;
//     cursor: pointer;
//     text-decoration: none;
// `;





// const Navbar = () => {
//   return (
//     <>
//     <NavBar>
//         <Nav>
//             <NavLogo>Portfolio</NavLogo>
//             <NavListContainer>
//             <NavList>
//                 <ListName to="home">Home</ListName>
//                 <ListName to="about">About</ListName>
//                 <ListName to="project">Projects</ListName>
//                 <ListName to="contact">Contact</ListName>           
//             </NavList>
//             </NavListContainer>
//         </Nav>
//     </NavBar>
//     </>
//   )
// }

// export default Navbar


import styled from "styled-components";
import { Link } from "react-scroll";
import { useState } from "react";

// Styled components
const NavBar = styled.section`
  margin: 2%;
  padding-top: 20px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  box-shadow: 0 0 10px #b336ff;
  background-color: #000;
  width: 80%;
  margin: auto;
  border-radius: 10px;
  position: relative; /* Ensure the dropdown is positioned correctly */
`;

const NavLogo = styled.h1`
  color: #b336ff;
`;

const NavListContainer = styled.div`
  @media (max-width: 570px) {
    display: ${(props) => (props.isMenuOpen ? "block" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #000;
    border-radius: 10px;
    box-shadow: 0 0 5px #b336ff;
    z-index: 1;
    margin-top:10px;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 570px) {
    flex-direction: column;
    gap: 1rem;
    padding: 10px 0;
  }
`;

const ListName = styled(Link)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #b336ff;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #b336ff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 570px) {
    display: block;

  }
`;

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <NavBar>
      <Nav>
        <NavLogo>Portfolio</NavLogo>
        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}
        </MenuButton>
        <NavListContainer isMenuOpen={isMenuOpen}>
          <NavList>
            <ListName to="home" onClick={() => setIsMenuOpen(false)}>
              Home
            </ListName>
            <ListName to="about" onClick={() => setIsMenuOpen(false)}>
              About
            </ListName>
            <ListName to="project" onClick={() => setIsMenuOpen(false)}>
              Projects
            </ListName>
            <ListName to="contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </ListName>
          </NavList>
        </NavListContainer>
      </Nav>
    </NavBar>
  );
};

export default Navbar;

