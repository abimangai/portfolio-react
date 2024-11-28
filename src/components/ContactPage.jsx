
// import styled from 'styled-components'

// const ContactSection=styled.div`
// margin-top:40px;
// `;
// const ContactContainer=styled.div`
//      width:80%;
//      margin:auto;
//      border-radius: 10px;
//      box-shadow:0 0 30px #B336FF;
//      background-color:#000;
//      color: #fff;
// `;
// const ContactTitle=styled.form`
//      color:#B336FF;
//      font-size: 28px;
//      text-align: center;
//      padding-top: 4%;
//      font-weight: bold;
// `;
// const ContactCont=styled.div`
//      align-items: center;
//      justify-content: center;
//      display: flex;
//      padding-top:5%;
//      padding-bottom:5%;

// `;

// const ContactForm=styled.form`
//   /* display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%; */

// `;

// const FormLabel=styled.label`
//     margin-bottom:2px;
//     font-size:16px;
//     font-weight: bold;
    

// `;
// const FormInput=styled.input`
//   /* border: none; */
//   border:2px solid #B336FF;
//   border-radius: 5px;
//   outline: none;
//   padding: 3%; 
//   width:350px;

//   &:hover{
//     box-shadow:0 0 30px #B336FF;
//   }
// `;
// const FormMessage=styled.textarea`
//   margin-top:3%;
//   width: 350px;
//   border:2px solid #B336FF;
//   border-radius: 5px;
//   outline: none;
//   padding: 3%; 
//   height: 120px;
  

//   &:hover{
//     box-shadow:0 0 30px #B336FF;
//   }
// `;
// const FormSubmitWrapper = styled.div`
//   display: flex;
//   justify-content: center; /* Centers the button horizontally */
//   width: 100%;
//   margin-top: 20px; /* Adds spacing above the button */
// `;
// const FormSubmit=styled.button`
//   padding: 10px 20px;
//   background-color: #B336FF;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 16px;

//   &:hover {
//     background-color: #9b2df2;
//     box-shadow: 0 0 10px #B336FF;
//   }
// `;



// const ContactPage = () => {
//   return (
//     <>
//     <ContactSection id="contact">
//       <ContactContainer>
//       <ContactTitle>Contact Me..</ContactTitle>
//         <ContactCont>
        
//           <ContactForm>
//           <FormLabel>FirstName</FormLabel><br/>
//           <FormInput type="text" name="fname" /><br/>
//           <FormLabel>LastName</FormLabel><br/>
//           <FormInput type="text" name="lname"  /><br/>
//           <FormLabel for="email" >Email Address</FormLabel><br/>
//           <FormInput type="text" /><br/>
//           <FormLabel for="email" >Mobile  Number</FormLabel><br/>
//           <FormInput type="text" /><br/>
//           <FormMessage >Message Me</FormMessage><br/>
//           {/* <FormTextarea type="text"/> */}
//           <FormSubmitWrapper>
//               <FormSubmit type="submit">Submit</FormSubmit>
//             </FormSubmitWrapper>
//           </ContactForm>
//         </ContactCont>
//       </ContactContainer>
//     </ContactSection>
//     </>
//   )
// }

// export default ContactPage


import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContactSection = styled.div`
  margin-top: 40px;
`;

const ContactContainer = styled.div`
  width: 80%;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 0 30px #b336ff;
  background-color: #000;
  color: #fff;
`;

const ContactTitle = styled.div`
  color: #b336ff;
  font-size: 28px;
  text-align: center;
  padding-top: 4%;
  font-weight: bold;
`;

const ContactCont = styled.div`
  align-items:center;
  justify-content: center;
  display: flex;
  padding-top: 5%;
  padding-bottom: 5%;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
`;

const FormLabel = styled.label`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const FormInput = styled.input`
  border: 2px solid #b336ff;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  width: 350px;
  margin-bottom: 20px;

  &:hover {
    box-shadow: 0 0 30px #b336ff;
  }
  @media (max-width:570px) and (min-width:320px) {
    width: 200px;
       
     }
`;

const FormMessage = styled.textarea`
  width: 350px;
  border: 2px solid #b336ff;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  height: 120px;
  margin-bottom: 20px;

  &:hover {
    box-shadow: 0 0 30px #b336ff;
  }

  @media (max-width:570px) and (min-width:320px) {
    width: 200px;
       
     }
`;

const FormSubmitWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const FormSubmit = styled.button`
  padding: 10px 20px;
  background-color: #b336ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #9b2df2;
    box-shadow: 0 0 10px #b336ff;
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5173/send', formData);
      alert('Message sent successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to send message.');
    }
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactTitle>Contact Me</ContactTitle>
        <ContactCont>
          <ContactForm onSubmit={handleSubmit}>
            <FormLabel>First Name</FormLabel>
            <FormInput
              type="text"
              name="fname"
              placeholder="Enter your first name"
              onChange={handleChange}
            />
            <FormLabel>Last Name</FormLabel>
            <FormInput
              type="text"
              name="lname"
              placeholder="Enter your last name"
              onChange={handleChange}
            />
            <FormLabel>Email Address</FormLabel>
            <FormInput
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
            <FormLabel>Mobile Number</FormLabel>
            <FormInput
              type="text"
              name="mobile"
              placeholder="Enter your mobile number"
              onChange={handleChange}
            />
            <FormLabel>Message</FormLabel>
            <FormMessage
              name="message"
              placeholder="Enter your message"
              onChange={handleChange}
            />
            <FormSubmitWrapper>
              <FormSubmit type="submit">Submit</FormSubmit>
            </FormSubmitWrapper>
          </ContactForm>
        </ContactCont>
      </ContactContainer>
    </ContactSection>
  );
};

export default ContactPage;
