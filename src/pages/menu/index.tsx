import Header from "../../components/header"
import Search from "../../components/search"
import * as S from "./styles"
import ArrowUp from "../../assets/arrowUp.svg"
import MenuItem from "../../components/menuItem"
import ModalSelectItem from "../../components/modalSelectItem"
import { useMenu } from "./hooks/menu-hook"


const MenuPage = () => {
    const { showModal, handleCloseOrOpenModal, menu, selectMenuSection, setSelectMenuSection, selectedItem } = useMenu();
    
  return (
    <>
        <Header/>
        <S.Container>
            <Search/>
            <S.ContainerMenuAndCart>
                <S.ContainerMenu>
                    <S.ContainerMenuOptions>
                        {
                            menu?.sections.map(element => {
                                return (
                                    <S.ButtonMenuOption onClick={() => setSelectMenuSection(element)} style={{borderBottomWidth: "3px", borderBottomStyle: "solid", borderBottomColor: "#4f372F"}}>
                                        <S.ImageOption src={element.images[0].image}/>
                                        <S.ContainerTitleMenuOption>
                                            <S.TitleMenuOption>{element.name}</S.TitleMenuOption>
                                        </S.ContainerTitleMenuOption>
                                    </S.ButtonMenuOption>
                                )
                            })
                        }
                    </S.ContainerMenuOptions>
                    <S.ContainerSections>
                        {
                            menu?.sections.map(sections => {
                                return (
                                    <>
                                    <S.ContainerSection>
                                        <S.TitleSection>{sections?.name}</S.TitleSection>
                                        <S.Icon src={ArrowUp}/>
                                    </S.ContainerSection>
                                    {
                                        sections?.items.map(element => {
                                            return (
                                                <MenuItem openModal={() => handleCloseOrOpenModal(element)} item={element}/>
                                            )
                                        })
                                    }
                                    </>
                                )
                            }) 
                        }
                    </S.ContainerSections>
                </S.ContainerMenu>
                <S.ContainerCard>
                    <S.ContainerTitleCard>
                        <S.TitleCard>Carrinho</S.TitleCard>
                    </S.ContainerTitleCard>
                </S.ContainerCard>
            </S.ContainerMenuAndCart>
        </S.Container>
        {
            showModal && selectedItem && <ModalSelectItem closeModal={handleCloseOrOpenModal} item={selectedItem}/>
        }
    </>
  )
}

export default MenuPage