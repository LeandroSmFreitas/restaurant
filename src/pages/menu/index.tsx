import Header from "../../components/header"
import Search from "../../components/search"
import * as S from "./styles"
import ArrowUp from "../../assets/arrowUp.svg"
import MenuItem from "../../components/menuItem"
import ModalSelectItem from "../../components/modalSelectItem"
import { useMenu } from "./hooks/menu-hook"
import { ItemCartToBuy } from "../../components/itemCart"


const MenuPage = () => {
    const { showModal, handleCloseOrOpenModal, menu, setSelectMenuSection, selectedItem, itemsCart, handleAddToCart } = useMenu();
    
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
                                                <MenuItem openModal={() => element.images ? handleCloseOrOpenModal(element) : handleAddToCart(element)} item={element}/>
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
                        <S.TitleCart>Carrinho</S.TitleCart>
                    </S.ContainerTitleCard>
                    {
                        itemsCart.length === 0 ?
                    <S.DescriptionCart>Seu carrinho esta vazio</S.DescriptionCart>
                    :
                        <>
                            {
                                itemsCart.map(element => {
                                    return (
                                        <ItemCartToBuy itemCart={element}/>
                                    )
                                })
                            }
                            <S.ContainerTotalCard>
                                <S.SubtotalCart>Sub total</S.SubtotalCart>
                                <S.SubtotalPrice>R$:{itemsCart.reduce(( acc, curr ) => acc + curr.total, 0)}</S.SubtotalPrice>
                            </S.ContainerTotalCard>
                            <S.ContainerTotalCard>
                                <S.SubtotalCart>Total</S.SubtotalCart>
                                <S.TotalCart>R$:{itemsCart.reduce(( acc, curr ) => acc + curr.total, 0)}</S.TotalCart>
                            </S.ContainerTotalCard>
                        </>
                    }
                </S.ContainerCard>
            </S.ContainerMenuAndCart>
        </S.Container>
        {
            showModal && selectedItem && <ModalSelectItem closeModal={() => handleCloseOrOpenModal(selectedItem, showModal)} item={selectedItem}/>
        }
    </>
  )
}

export default MenuPage