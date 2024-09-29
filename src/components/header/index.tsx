import * as S from "./styles"


const Header = () => {
  return (
    <S.Container>
        <S.ContainerMenus>
            <S.ContainerButtons>
                <S.HeaderButton style={{borderBottomWidth: "5px", borderBottomStyle: "solid", borderBottomColor: "white"}}>
                    <S.TitleButton>Menu</S.TitleButton>
                </S.HeaderButton>
                <S.HeaderButton>
                    <S.TitleButton>Entrar</S.TitleButton>
                </S.HeaderButton>
                <S.HeaderButton>
                    <S.TitleButton>Contato</S.TitleButton>
                </S.HeaderButton>
            </S.ContainerButtons>
        </S.ContainerMenus>
        <S.Logo src="https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png"/>
    </S.Container>
  )
}

export default Header