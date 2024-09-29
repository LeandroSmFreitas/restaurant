import styled from "styled-components";

interface ImageProps {
    url: string;
}

interface PlusAndDeductButtonProps{
    isPlus?: boolean;
}

export const Container = styled.div`
    width: 100vw;
    min-height: 100%;
    background-color: #000000A6;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 1;
    top: 0;
`

export const ContainerModalBody = styled.div`
    width: 480px;
    height: 720px;
    margin-top: 63px;
`

export const ContainerMenuItemImage = styled.div<ImageProps>`
    width: 100%;
    height: 320px;
    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    padding: 18px 16px 0px 0px;
    box-sizing: border-box;
`

export const CloseIcon = styled.img`
    width: 12px;
    height: 12px;
`

export const CloseButton = styled.button`
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: white;
    border: none;
    cursor: pointer;
`

export const ContainerDescription = styled.div`
    width: 100%;
    height: 106px;
    display: flex;
    background-color: white;
    flex-direction: column;
    padding: 16px;
    box-sizing: border-box;
`

export const TitleMenuItem = styled.span`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 28.13px;
    text-align: left;
    color: #121212;
    margin-bottom: 8px;
`

export const DescriptionMenuItem = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.75px;
    letter-spacing: 0.5px;
    text-align: left;
    color: #464646;
`

export const ContainerAdditional = styled.div`
    width: 100%;
    max-height: 172px;
    display: flex;
    overflow-y: auto;
    background-color: white;
    flex-direction: column;
`

export const ContainerTitleAdditional = styled.div`
    width: 100%;
    height: 68px;
    background-color: #F8F9FA;
    display: flex;
    flex-direction: column;
    padding: 16px 24px 16px 24px;
    box-sizing: border-box;
`

export const TitleAddtional = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    line-height: 18.75px;
    letter-spacing: 0.5px;
    text-align: left;
    color: #464646;
`

export const DescriptionAdditional = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.75px;
    letter-spacing: 0.5px;
    text-align: left;
    color: #5F5F5F;

`

export const ContainerSize = styled.div`
    width: 100%;
    height: 72px;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 24px 16px 24px;
    box-sizing: border-box;
`

export const ContainerInfoSize = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const TitleSize = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    line-height: 18.75px;
    letter-spacing: 0.5px;
    text-align: left;
    color: #464646;
    margin-bottom: 4px;
`

export const ValueSize = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.75px;
    letter-spacing: 0.5px;
    text-align: left;
    color: #5F5F5F;

`

export const Radio = styled.input.attrs({ type: 'radio' })`
  margin-right: 10px;
  appearance: none;
  border: 2px solid #5F5F5F;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: relative;

  &:checked {
    border-color: #5F5F5F;
  }

  &:checked::before {
    content: '';
    width: 13px;
    height: 14px;
    background-color: #5F5F5F;
    border-radius: 50%;
    position: absolute;
    top: 1px;
    left: 1px;
  }
`;


export const ContainerFooterModal = styled.div`
    width: 100%;
    height: 122px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerIncrement = styled.div`
    width: 143px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const PlusAndDeductButton = styled.button<PlusAndDeductButtonProps>`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${({ isPlus }) => isPlus ? "#4F372F" : "#DADADA" };
    border: none;
    cursor: pointer;
`

export const PlusDeductIcon = styled.img`
    width: 18px;
    height: 18px;
`

export const ValueIncrement = styled.span`
    font-family: SF Pro Display;
    font-size: 24px;
    font-weight: 600;
    line-height: 28.64px;
    text-align: center;
    color: #121212;

`

export const AddToCardButton = styled.button`
    width: 432px;
    height: 48px;
    padding: 4px 24px 4px 24px;
    border-radius: 40px;
    background-color: #4F372F;
    margin-top: 10px;
    cursor: pointer;
`

export const TitleAddToCardButton = styled.span`
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    line-height: 21.09px;
    letter-spacing: 0.75px;
    text-align: center;
    color: white;
`











