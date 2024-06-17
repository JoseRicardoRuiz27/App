import styled from "styled-components"

const ListaEstilo = styled.li`
        font-size: 24px;
        margin-bottom: 40px;
        line-height: 26px;
        display: flex;
        align-items: center;
        gap: 16px;
        color: ${props => props.$activo ? "#7B78E5" : "#D9D9D9"};
    `

const ItemNavegacion = ({children, iconoActivo, iconoInactivo, activo=false}) =>{
    return<ListaEstilo $activo={activo}>
    <img src={activo ? iconoActivo : iconoInactivo} alt="icono" />
    {children}
    </ListaEstilo>
}

export default ItemNavegacion