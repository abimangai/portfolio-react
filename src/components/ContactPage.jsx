

import React from 'react'
import styled from 'styled-components'

const ContactSection=styled.div`
 

`;
const ContactContainer=styled.div`
     width:80%;
     margin:auto;
     border-radius: 10px;
     box-shadow:0 0 30px #B336FF;
     background-color:#000;
     color: #fff;
`;
const ContactTitle=styled.form`
     color:#B336FF;
     font-size: 28px;
     text-align: center;
     padding-top: 4%;
     font-weight: bold;
`;
const ContactCont=styled.div`
     align-items: center;
     justify-content: center;
     display: flex;
     padding-top:5%;
     padding-bottom:5%;

`;

const ContactForm=styled.form`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; */

`;

const FormLabel=styled.label`
    margin-bottom:2px;
    font-size:16px;
    font-weight: bold;
    

`;
const FormInput=styled.input`
  /* border: none; */
  border:2px solid #B336FF;
  border-radius: 5px;
  outline: none;
  padding: 3%; 
  width:350px;

  &:hover{
    box-shadow:0 0 30px #B336FF;
  }
`;
const FormMessage=styled.textarea`
  margin-top:3%;
  width: 350px;
  border:2px solid #B336FF;
  border-radius: 5px;
  outline: none;
  padding: 3%; 
  height: 120px;
  

  &:hover{
    box-shadow:0 0 30px #B336FF;
  }
`;
const FormSubmitWrapper = styled.div`
  display: flex;
  justify-content: center; /* Centers the button horizontally */
  width: 100%;
  margin-top: 20px; /* Adds spacing above the button */
`;
const FormSubmit=styled.button`
padding: 10px 20px;
  background-color: #B336FF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #9b2df2;
    box-shadow: 0 0 10px #B336FF;
  }
`;



const ContactPage = () => {
  return (
    <>
    <ContactSection>
      <ContactContainer>
      <ContactTitle>Contact Me..</ContactTitle>
        <ContactCont>
        
          <ContactForm>
          <FormLabel>FirstName</FormLabel><br/>
          <FormInput type="text" name="fname" /><br/>
          <FormLabel>LastName</FormLabel><br/>
          <FormInput type="text" name="lname"  /><br/>
          <FormLabel for="email" >Email Address</FormLabel><br/>
          <FormInput type="text" /><br/>
          <FormLabel for="email" >Mobile  Number</FormLabel><br/>
          <FormInput type="text" /><br/>
          <FormMessage >Message Me</FormMessage><br/>
          {/* <FormTextarea type="text"/> */}
          <FormSubmitWrapper>
              <FormSubmit type="submit">Submit</FormSubmit>
            </FormSubmitWrapper>
          </ContactForm>
        </ContactCont>
      </ContactContainer>
    </ContactSection>
    </>
  )
}

export default ContactPage
