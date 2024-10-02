import styled from "styled-components"

interface CardTotal {
    showBorder?: boolean;
}


export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #F8F9FA;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    z-index: 1;
    top: 0;
`

export const ContainerHeader = styled.div`
    width: 100%;
    height: 64px;
    display: grid;
    grid-template-columns: 1fr auto; 
    color: white;
    align-items: center;
    border-bottom: 1px solid #DADADA;
    background-color: white;
`

export const TitleHeader = styled.span`
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    line-height: 23.44px;
    letter-spacing: 0.005em;
    text-align: center;
    color: black;
`

export const CloseButton = styled.button`
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding-right: 32px;
`

export const CloseIcon = styled.img`
    width: 12px;
    height: 12px;
`

export const ContainerTotalCard = styled.div<CardTotal>`
    width: 100%;
    min-height: 58px;
    background-color: #F8F9FA;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 32px;
    box-sizing: border-box;
    border-bottom: ${({ showBorder }) => showBorder ? "1px solid #DADADA" : "none"};
`

export const TotalCart = styled.span`
    font-family: SF Pro Display;
    font-size: 24px;
    font-weight: 300;
    line-height: 28.64px;
    text-align: left;
`

export const SubtotalCart = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.75px;
    text-align: left;
`

export const SubtotalPrice = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 18.75px;
    text-align: right;
`