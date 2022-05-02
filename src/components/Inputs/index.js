import React from 'react';
import styled from 'styled-components';

// import { Container } from './styles';
import './styles.css'

export const Input = ({ label }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: `100%`, }}>
      <label style={{ paddingBottom: '8px' }}>{label}</label>
      <input type="text" placeholder='Digite aqui...'
        style={{ outline: 'none', padding: '0 15px', height: '60px', borderRadius: '10px', border: '2px solid #c4c4c4', background: 'transparent' }} />
    </div>
  )
}

export const InputRadious = (props) => {
  return (
    <ContainerInputRadios >{props.placeholder}
      <InputRadio type="radio" name={props.groupBy} {...props} />
      <CheckMark checked={props.checked} ></CheckMark>
    </ContainerInputRadios>
  )
}

export const ContainerInputRadios = styled.label`
  display: flex;
  align-items: center;
  justify-content: baseline;
  position: relative;
  
  padding-left: 50px;
  margin-bottom: 12px;
  cursor: pointer;

  height: 60px;
  width: 100%;
  border-radius: 10px;
  border: 2px solid #c4c4c4;

  color:  #A4A4A4;
  font-size: 16px;
  background: #F7FAFC;

  input {
  position: absolute;
  opacity:0;
  cursor: pointer;
  }

  &:hover input ~ span {
    background: #F7FAFC;
  }

  input:checked ~ span:after {
    display: block;
    background: #46D0D0;
    width: 12px;
    height: 12px;
    top: 5px;
    left: 5px;
    border-radius: 50%;
  }


  span:after{
    width: 12px;
    height: 12px;
    top: 5px;
    left: 5px;
    border-radius: 50%;
   
  }
  

`

export const CheckMark = styled.span`

  position: absolute;
  top: 16px;
  left: 10px;
  height: 26px;
  width: 26px;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid ${props => props.checked ? '#46D0D0' : '#C4C4C4'};

  &:after {
    content: "";
    position: absolute;
    display: block;
  }

`

export const InputRadio = styled.input`
  position: absolute;
  opacity:0;
  cursor: pointer;
`



