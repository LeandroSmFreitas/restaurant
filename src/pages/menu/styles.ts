import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 12px;
`

export const ContainerMenuAndCart = styled.div`
    width: 1024px;
    min-height: 1337px;
    background-color: #F8F9FA;
    margin-top: 6px;
    display: flex;
    padding-top: 32px;
`

export const ContainerMenu = styled.div`
    width: 600px;
    height: 1071px;
    padding: 0px 0px 24px 0px;
    margin: 0px 24px 0px 40px;
    background-color: #fff;
`

export const ContainerCard = styled.div`
    width: 320px;
    height: 129px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 14px 0px #00000026;
    flex-grow: 0;
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
`

export const ButtonMenuOption = styled.button`
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
`

export const ImageOption = styled.img`
    width: 82px;
    height: 82px;
    border-radius: 50px;
    border: 2px solid #4F372F;
    padding: 4px;
    box-sizing: border-box;
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
  overflow-x: auto;  /* Habilita o scroll horizontal */
  white-space: nowrap;  /* Garante que os itens fiquem em uma linha horizontal */
  width: 100%;  /* Controla o tamanho do container para evitar que ele quebre a linha */
  height: 890px;
  /* Estilo opcional para personalizar a barra de rolagem */
  &::-webkit-scrollbar {
    height: 8px;  /* Altura da barra de rolagem horizontal */
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;  /* Cor da barra */
    border-radius: 4px;
  }
`;

