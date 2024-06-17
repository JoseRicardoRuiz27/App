import styled from "styled-components"
import CampoTexto from "../CampoTexto"


const Header = styled.header`
        padding: 60px 0;
        display: Flex;
        justify-content: space-between;
        img{
            width: 212px;
        }
    `

const Cabecera = () => {
    return <Header>
        <img src="img/logo.png" alt="Logo-App" />
        <CampoTexto></CampoTexto>
    </Header>
}

export default Cabecera