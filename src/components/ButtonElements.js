import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button=styled(Link)`
border-radius: 50px;
text-decoration: none;
background: ${({primary})=>(primary? '#02c2f7': '#010606')};
white-space: nowrap;
padding: ${({big})=>(big? '14px 48px': '12px 30px')};
color: ${({dark})=>(dark? '#010606': '#fff')};
font-size: ${({fontBig})=>(fontBig? '20fx': '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
transition: all 0.2s ease-in-out;
background: ${({primary})=>(primary? '#fff': '#02c2f7')};

}
`;