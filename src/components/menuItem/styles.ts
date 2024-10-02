import styled from "styled-components";


export const Container = styled.button`
    width: 100%;
    min-height: 70px;
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    justify-content: space-between;
    padding: 16px 16px 0px 16px;
    box-sizing: border-box;
    cursor: pointer;
    @media screen and (max-width: 600px) {
        padding-left: 0px;
    }
`

export const ContainerInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const ContainerTitleAndValueInBasket = styled.div`
    display: flex;
`

export const Title = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 18.75px;
    text-align: left;
`

export const ContainerValueInBasket = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 4px;
    background-color: #4F372F;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ValueInBasket = styled.span`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 16.41px;
    text-align: center;
    color: white;
`

export const Description = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 300;
    line-height: 18.75px;
    color: #464646;
    margin-top: 10px;
    margin-bottom: 10px;
    word-wrap: break-word;
    white-space: normal;
    overflow-wrap: break-word;
    text-align: left;
    @media screen and (max-width: 600px) {
        max-width: 100%;
        margin: 10px 10px 10px 0px;
    }
`

export const Value = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 18.75px;
    letter-spacing: 0.5px;
    text-align: left;
`

export const ImageItem = styled.img`
    width: 128px;
    height: 85px;
    border-radius: 4px;
`