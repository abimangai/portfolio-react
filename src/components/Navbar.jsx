import styled from "styled-components";
import {Link} from "react-router-dom";

const NavBar=styled.section`
   margin: 2%;
   /* background-color: #251d22;  */
`;
const Nav=styled.div`
    display:flex;
    justify-content: space-between;
    padding: 20px 30px;
    box-shadow:0 0 20px #B336FF;
    background-color: #000;
    width:80%;
    margin:auto;
    border-radius: 10px;
 
`;
const NavLogo=styled.h1`
    color: #B336FF;
    /* text-shadow:0 0 10px #c9a1e3; */
`;

const NavListContainer=styled.div`
    
`;
const NavList=styled.ul`
     display:flex;
    justify-content:space-between;
    align-items: center;
    gap:2rem;
`;
const ListName=styled(Link)`
    color: #fff;
    list-style: none;
    cursor: pointer;
    text-decoration: none;
`;





const Navbar = () => {
  return (
    <>
    <NavBar>
        <Nav>
            <NavLogo>Portfolio</NavLogo>
            <NavListContainer>
            <NavList>
                <ListName to="/">Home</ListName>
                <ListName to="about">About</ListName>
                <ListName to="project">Projects</ListName>
                <ListName to="contact">Contact</ListName>           
            </NavList>
            </NavListContainer>
        </Nav>
    </NavBar>
    </>
  )
}

export default Navbar
