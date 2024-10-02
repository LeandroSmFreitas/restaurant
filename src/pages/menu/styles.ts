import styled from "styled-components";

interface MenuOption{
    isSelected: boolean;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 12px;
    @media screen and (max-width: 1023px) {
        background-color: white;
    }
`

export const ContainerMenuAndCart = styled.div`
    width: 1024px;
    min-height: 1337px;
    background-color: #F8F9FA;
    margin-top: 6px;
    display: flex;
    padding-top: 32px;
    @media screen and (max-width: 1023px) {
        width: 100%;
        background-color: white;
        min-height: auto;
        height: auto;
        max-height: auto;
    }
`

export const ContainerMenu = styled.div`
    width: 600px;
    height: 1071px;
    padding: 0px 0px 24px 0px;
    margin: 0px 24px 0px 40px;
    background-color: #fff;
    @media screen and (max-width: 1023px) {
        width: 100%;
        margin: 0px 0px 0px 0px;
    }
    @media screen and (max-width: 1023px) {
        display: flex;
        flex-direction: column;
    }
`

export const ContainerCard = styled.div`
    width: 320px;
    height: 129px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 14px 0px #00000026;
    flex-grow: 0;

    @media screen and (max-width: 1023px) {
        display: none;
    }
`

export const ContainerTitleCard = styled.div`
    width: 100%;
    min-height: 64px;
    background-color: #F8F9FA;
    border-radius: 5px 5px 0px 0px;
    display: flex;
    align-items: center;
    box-shadow: -2px -2px 5px #00000024;
`

export const TitleCart = styled.span`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 500;
    line-height: 28.13px;
    letter-spacing: 0.5px;
    margin-left: 24px;
`

export const DescriptionCart = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.75px;
    margin-left: 24px;
    margin-top: 24px;
`

export const ContainerTotalCard = styled.div`
    width: 100%;
    min-height: 58px;
    background-color: #F8F9FA;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 2px 2px 5px #00000024;
    padding-left: 16px;
    padding-right: 16px;
    box-sizing: border-box;
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

export const ContainerMenuOptions = styled.div`
    width: 100%;
    height: 190px;
    display: flex;
    align-items: center;
    padding: 20px 0px 24px 16px;
    box-sizing: border-box;
    @media screen and (max-width: 1023px) {
        padding-bottom: 0px;
    }

    @media screen and (max-width: 370px) {
        width: 95%;
        padding: 0px 0px 0px 0px;
    }
`

export const ButtonMenuOption = styled.button<MenuOption>`
    width: 104px;
    height: 146px;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    border: none;
    margin-right: 12px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border-bottom-width: ${({ isSelected }) => isSelected ? "3px" : "none"};
    border-bottom-style: ${({ isSelected }) => isSelected ? "solid" : "none"};
    border-bottom-color: ${({ isSelected }) => isSelected ? "#4f372F" : "none"};
`

export const ImageOption = styled.img<MenuOption>`
    width: 82px;
    height: 82px;
    border-radius: 50px;
    border: ${({ isSelected }) => isSelected ? "2px solid #4F372F" : "none"};
    padding: 2px;
    box-sizing: border-box;
    object-fit: cover;
    scale: crop;
`

export const ContainerTitleMenuOption = styled.div`
    width: 100%;
    height: 62px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TitleMenuOption = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 600;
    line-height: 18.75px;
    letter-spacing: 0.5px;
    text-align: center;
`

export const ContainerSection = styled.section`
    width: 100%;
    height: 72px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 32px 16px 12px 16px;
    box-sizing: border-box;
    cursor: pointer;
    @media screen and (max-width: 1023px) {
        padding: 16px 0px 16px 0px;
    }
`

export const TitleSection = styled.span`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 500;
    line-height: 28.13px;
    letter-spacing: 0.5px;
`

export const Icon = styled.img`
    width: 18px;
    height: 18px;

`


export const ContainerSections = styled.div`
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    white-space: nowrap;
    width: 100%;
    height: 890px;
    &::-webkit-scrollbar {
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 4px;
    }
    @media screen and (max-width: 1023px) {
        width: 90%;
        padding: 0px 0px 0px 16px;
    }

`;

export const BasketButton = styled.button`
    display: none;
    @media screen and (max-width: 1024px) {
        width: 512px;
        height: 48px;
        padding: 4px 24px 4px 24px;
        border-radius: 40px;
        background-color: #4F372F;
        margin-top: 10px;
        cursor: pointer;
        bottom: 24px;
        display: flex;
        border: none;
        position: fixed;
        align-items: center;
        justify-content: center;
        z-index: 2;
        bottom: 40px;
    }

    @media screen and (max-width: 520px) {
        width: 90%;
    }
`

export const TitleBasketButton = styled.span`
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    line-height: 21.09px;
    letter-spacing: 0.75px;
    text-align: center;
    color: white;
`

