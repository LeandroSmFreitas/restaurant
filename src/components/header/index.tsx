import * as S from "./styles"
import Hamburguer from '../../assets/hamburger.svg'
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../store/store";

const Header = () => {
  const { t } = useTranslation();
  const theme = useAppSelector((state) => state.theme);

  return (
    <S.Container>
        <S.ContainerMenus>
            <S.HamburgerMenu>
                <S.TitlePage>{t('header.menu')}</S.TitlePage>
                <S.HamburgerIcon src={Hamburguer}/>
            </S.HamburgerMenu>
            <S.ContainerButtons>
            <S.HeaderButton style={{ borderBottomWidth: "5px", borderBottomStyle: "solid", borderBottomColor: "white" }}>
                <S.TitlePage>{t('header.menu')}</S.TitlePage>
            </S.HeaderButton>
            <S.HeaderButton>
                <S.TitlePage>{t('header.enter')}</S.TitlePage>
            </S.HeaderButton>
            <S.HeaderButton>
                <S.TitlePage>{t('header.contact')}</S.TitlePage>
            </S.HeaderButton>
            </S.ContainerButtons>
        </S.ContainerMenus>
        <S.Logo src={theme.webSettings.bannerImage}/>
    </S.Container>
  )
}

export default Header