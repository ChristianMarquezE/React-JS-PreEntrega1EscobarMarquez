import { useState } from 'react'
import Nav from './components/Nav';
import Li from './components/Li';
import NavLinks from './components/NavLinks';
import MenuPlegable from './components/MenuPlegable';
import Header from './components/Header';
import HeaderTitle from './components/HeaderTitle';
import SocialIcons from './components/SocialIcons';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header>
        <HeaderTitle />

        <Nav>
          <NavLinks>
            <Li texto="Inicio" Href="#"></Li>
            <Li
              texto="Colecciones"
              Href="#"
              AClass="colecciones-link"
              LiClass="colecciones"
            >
              <MenuPlegable>
                <Li texto="Praia" Href="#"></Li>
                <Li texto="Éclat Céleste" Href="#"></Li>
                <Li texto="Resplandor del desierto" Href="#"></Li>
                <Li texto="SastrO" Href="#"></Li>
                <Li texto="Retrofutura" Href="#"></Li>
                <Li texto="Ver todo" Href="#"></Li>
              </MenuPlegable>
            </Li>
            <Li texto="Sobre Mí" Href="#"></Li>
            <Li texto="Manifiesto" Href="#"></Li>
          </NavLinks>
        </Nav>
        <SocialIcons />
      </Header>
    </>
  )
}

export default App
