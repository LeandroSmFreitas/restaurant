import * as S from "./styles"
import Hamburguer from '../../assets/hamburger.svg'

const Header = () => {
  return (
    <S.Container>
        <S.ContainerMenus>
            <S.HamburgerMenu>
                <S.TitlePage>Menu</S.TitlePage>
                <S.HamburgerIcon src={Hamburguer}/>
            </S.HamburgerMenu>
            <S.ContainerButtons>
                <S.HeaderButton style={{borderBottomWidth: "5px", borderBottomStyle: "solid", borderBottomColor: "white"}}>
                    <S.TitlePage>Menu</S.TitlePage>
                </S.HeaderButton>
                <S.HeaderButton>
                    <S.TitlePage>Entrar</S.TitlePage>
                </S.HeaderButton>
                <S.HeaderButton>
                    <S.TitlePage>Contato</S.TitlePage>
                </S.HeaderButton>
            </S.ContainerButtons>
        </S.ContainerMenus>
        <S.Logo src="https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png"/>
    </S.Container>
  )
}

export default Header