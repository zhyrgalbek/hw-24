import styled, { css } from 'styled-components';

export const Input = styled.input`
    border: 1px solid #235367;
    padding: .8rem 1.8rem;
    width: 100%;
    background-color: #235367;
    color: #A9C3CB;
    border-radius: 15px;
    font-size: 1.3rem;
    position: relative;
    &:focus{
      background-color: #1C4558;
      outline: none;
    }
    /* &:after{
      content: "❤";
      display: block;
      position: absolute;
      top: 12px;
      left: 5px;
    } */
    ${props => props.primary && css`
      border: 1.9px solid red;
    `}
`;
export const Label = styled.label`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
`;

export const Control = styled.div`
  /* border: 1px solid #000; */
  padding: 10px 0px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

export const Form = styled.form`
  /* border: 1px solid #000; */
  width: 300px;
  margin: 0 auto;
  padding: 10px 50px;
  background-color: #356E84;
  display: flex;
  flex-flow: column nowrap;
`;

export const FormSubmit = styled.button`
  border: 1px solid #EA533C;
  padding: 8px 40px;
  border-radius: 8px;
  background-color: #EA533C;
  box-shadow: 4px 0px 13px -1px #000;
  color: #A9C3CB;
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  ${props=>props.primary && css`
    background-color: #AAAAAB;
    border: 1px solid #AAAAAB;
  `}
`;

export const FormHeader = styled.h1`
  text-align: center;
  color: #A9C3CB;
`;
