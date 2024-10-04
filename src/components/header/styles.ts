import styled from "styled-components";


export const Container = styled.header`
    width: 100vw;
    display: flex;
    flex-direction: column;
`

export const HamburgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto; 
    cursor: pointer;
    color: white;
  }
`;

export const HamburgerIcon = styled.img`
    width: 12px;
    height: 12px;
    justify-self: flex-end;
    margin-right: 22px;
    align-self: center;
`

export const ContainerMenus = styled.div`
    width: 100%;
    height: 52px;
    background-color: ${({ theme }) => theme.webSettings.navBackgroundColour};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerButtons = styled.nav`
    display: flex;
    @media screen and (max-width: 768px) {
        display: none;
  }
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

export const TitlePage = styled.span`
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
    object-fit: cover;
`