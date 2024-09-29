import styled from "styled-components";


export const Container = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const ContainerMenus = styled.div`
    width: 100%;
    height: 52px;
    background-color: #4F372F;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerButtons = styled.nav`
    display: flex;
`

export const HeaderButton = styled.button`
    width: 252px;
    height: 52px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
`

export const TitleButton = styled.span`
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 23.44px;
    letter-spacing: 0.005em;
    text-align: center;
    color: white;
`

export const Logo = styled.img`
    width: 100%;
    height: 150px;
`