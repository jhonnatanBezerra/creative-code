import Logo from '../src/assets/image/Logo.svg';
import Play from '../src/assets/image/Play.svg';
import TheMembers from '../src/assets/image/TheMembers.svg';
import React, { useState } from 'react';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import './styles.css'
import styled from 'styled-components';
import { AiOutlineLeft } from 'react-icons/ai'
import { FiGrid, FiUsers } from 'react-icons/fi'
import { BiCopy } from 'react-icons/bi'
import { BsMegaphone, BsBarChartLine } from 'react-icons/bs'
import { Input, InputRadious } from './components/Inputs/'


function App() {

  const data = new Array(10).fill('');

  return (
    <div style={{ background: '#F7FAFC' }}>
      <Header >
        <strong >TheMembers.</strong>
      </Header>

      <Aside >

        <IconContainer>
          <AiOutlineLeft />
          <span >Voltar</span>
        </IconContainer>

        <IconContainer>
          < FiGrid />
          <span >Dashbord</span>
        </IconContainer>

        <IconContainer>
          < BiCopy />
          <span >Contratos</span>
        </IconContainer>

        <IconContainer>
          < FiUsers />
          <span >Usuarios</span>
        </IconContainer>

        <IconContainer>
          < BsMegaphone />
          <span >Informações</span>
        </IconContainer>

        <IconContainer>
          < BsBarChartLine />
          <span >Relatorios</span>
        </IconContainer>


      </Aside>

      <MainContainer>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <h1 style={{ fontSize: '34px', lineHeight: '51px', fontWeight: '400', font: 'Poppins' }}>Meu perfil</h1>
          <PrimaryButton color='#f6f6f6'>Voltar</PrimaryButton>
        </div>

        <strong>Conteudo > Cursos > Meu perfil</strong>

        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', paddingTop: `41px` }}>
          <PrimaryButton>Dados pessoais</PrimaryButton>
          <PrimaryButton>Dados financeiros</PrimaryButton>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Input label='Nome completo' />
          <Input label='E-mail' />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', paddingTop: `41px` }}>

          <InputRadious groupBy="teste1" placeholder="Sou pessoa física" />

          <InputRadious groupBy="teste1" placeholder="Sou pessoa juridica" />


        </div>


      </MainContainer>


    </div>
  );
}

export default App;



const Table = () => (

  <React.Fragment>

    <p className="uk-h3">Todos os episódios</p>

    <table class="uk-table uk-table-divider">
      <thead>
        <tr>
          <th>PODCAST</th>
          <th>INTEGRANTES</th>
          <th>DATA</th>
          <th>DURAÇÃO</th>
          <th></th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Sexxxxtooooou</td>
          <td>Jhonnatan Bezerra</td>
          <td>29 Abril 22</td>
          <td>01:35:18</td>
          <td>
            <img src={Play} alt="PlayButtom" style={{ width: 35, cursor: 'pointer' }} />
          </td>
        </tr>

        <tr>
          <td>A vida é boa</td>
          <td>Jhonnatan Bezerra</td>
          <td>29 Abril 22</td>
          <td>01:35:18</td>
          <td>
            <img src={Play} alt="PlayButtom" style={{ width: 35, cursor: 'pointer' }} />

          </td>
        </tr>

        <tr>
          <td>Como usar UIKIT</td>
          <td>Jhonnatan Bezerra</td>
          <td>29 Abril 22</td>
          <td>01:35:18</td>
          <td>
            <img src={Play} alt="PlayButtom" style={{ width: 35, cursor: 'pointer' }} />

          </td>
        </tr>

        <tr>
          <td>Desvendando o Ant Design</td>
          <td>Jhonnatan Bezerra</td>
          <td>29 Abril 22</td>
          <td>01:35:18</td>
          <td>
            <img src={Play} alt="PlayButtom" style={{ width: 35, cursor: 'pointer' }} />
          </td>
        </tr>



      </tbody>
    </table>
  </React.Fragment>
)

export const Header = styled.header`
  position: relative;
  height: 60px;
  width: 100%;
  background: #46D0D0;
  display: flex;
  align-items: center;
  box-shadow: 5px 5px 19px rgba(0, 0, 0, 0.12);

  strong {
    font-size: 20px;
    text-align: center;
    padding-left: 50px;
    color: #fff;
  }
`

export const Aside = styled.aside`

  /* height: calc(100vh - 60px); */
  background: #F7FAFC;
  width: 70px;
  box-shadow: 5px 5px 19px rgba(0, 0, 0, 0.12);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;


  svg{
    color: #7B7B7B;
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin-bottom: 23px ;
  }

  svg:first-child{
    margin-top: 36px;
    margin-bottom: 45px;
    color: #000;
  }

  

`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;



  span{
    padding: 0 10px;
    border-radius: 0 5px 5px 0;
    position: absolute;
    background: #F7FAFC;
    font-size: 18px;
    left: -500px; 
    opacity: 0;
    box-shadow: 5px 5px 19px rgba(0, 0, 0, 0.12);
    height: 30px;
  }

  &:hover span{
    left: 50px; 
    opacity: 1;
    transition: opacity 0.1s ease-in-out;; 
  }

`

export const MainContainer = styled.div`
  padding-top: 60px;
  padding-left: 186px;
  padding-right: 116px

`

export const PrimaryButton = styled.button`
 height: 50px;
 width: 164px;
 border-radius: 10px;
 background: ${props => props.color};
 border: 1px solid rgba(0, 0, 0, 0.2);
 font-size: 16px;
 text-align: center;
 color: rgba(0, 0, 0, 0.3);
 cursor: pointer;

`
