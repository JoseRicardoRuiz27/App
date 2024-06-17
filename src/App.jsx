import styled from "styled-components"
import GlobaStyled from "./componente/GlobalStyled"
import Cabecera from "./componente/Header"
import BarraLateral from "./componente/BarraLateral"
import Banner from "./componente/Banner"
import banner from "./assets/banner.png"

const FondoGradiente = styled.div`
    background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;

  `
const AppConteiner= styled.div`
    width: 1440px;
    max-width: 100%;
    margin: 0 auto;
  `
const MainConteiner = styled.main`
  display: flex;
  gap: 24px;
  `

function App() {
  return (
    <>
      <FondoGradiente>
        <GlobaStyled />
        <AppConteiner>  
          <Cabecera />
          <MainConteiner>
          <BarraLateral />
          <Banner texto="La galeria mas completa del espacio"
                  backgroundImage={banner}/>
          </MainConteiner>
        </AppConteiner>
      </FondoGradiente>
    </>
  )
}

export default App