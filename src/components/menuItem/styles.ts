import styled from "styled-components";


export const Container = styled.button`
    width: 100%;
    height: 117px;
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    justify-content: space-between;
    padding: 16px 16px 0px 16px;
    box-sizing: border-box;
    cursor: pointer;
`

export const ContainerInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const Title = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 18.75px;
    text-align: left;
`

export const Description = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 300;
    line-height: 18.75px;
    color: #464646;
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