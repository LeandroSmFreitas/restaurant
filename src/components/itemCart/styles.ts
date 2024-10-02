import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 71px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding-top: 10px;
    @media screen and (max-width: 1024px) {
        box-sizing: border-box;
    }
`

export const ContainerTitleAndPrice = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    @media screen and (max-width: 1024px) {
        margin-top: 8px;
    }
`

export const Title = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.75px;
    text-align: left;
    margin-left: 16px;
`

export const Price = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 18.75px;
    letter-spacing: 0.5px;
    text-align: right;
    margin-right: 16px;
    @media screen and (max-width: 1024px) {
        margin-right: 32px;
    }
`

export const Modifier = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.75px;
    text-align: left;
    margin-left: 16px;
`

export const ContainerIncrement = styled.div`
    width: 94px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 16px;
    @media screen and (max-width: 1024px) {
        margin-bottom: 20px;
    }
`

export const PlusAndDeductButton = styled.button`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #4F372F;
    border: none;
    cursor: pointer;
`

export const PlusDeductIcon = styled.img`
    width: 12px;
    height: 12px;
`

export const ValueIncrement = styled.span`
    font-family: SF Pro Display;
    font-size: 24px;
    font-weight: 600;
    line-height: 28.64px;
    text-align: center;
    color: #121212;
`