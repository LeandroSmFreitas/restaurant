import Header from "../../components/header"
import Search from "../../components/search"
import * as S from "./styles"
import ArrowUp from "../../assets/arrowUp.svg"
import ArrowDown from "../../assets/arrowDown.svg"
import MenuItem from "../../components/menuItem"
import ModalSelectItem from "../../components/modalSelectItem"
import { useMenu } from "./hooks/menu-hook"
import { ItemCartToBuy } from "../../components/itemCart"
import React from "react"
import ModalBasket from "../../components/modalBasket"


const MenuPage = () => {
    const { 
        showModalItem, 
        handleCloseOrOpenModal, 
        menu, 
        handleSelectMenuSection, 
        selectMenuSection, 
        selectedItem, 
        itemsCart, 
        handleAddToCart, 
        toggleSection, 
        openSections,
        showModalBasket,
        handleCloseOrOpenModalBasket 
    } = useMenu();
    
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
                                    <S.ButtonMenuOption onClick={() => handleSelectMenuSection(element)} isSelected={selectMenuSection?.name === element.name}>
                                        <S.ImageOption src={element.images[0].image} isSelected={selectMenuSection?.name === element.name}/>
                                        <S.ContainerTitleMenuOption>
                                            <S.TitleMenuOption>{element.name}</S.TitleMenuOption>
                                        </S.ContainerTitleMenuOption>
                                    </S.ButtonMenuOption>
                                )
                            })
                        }
                    </S.ContainerMenuOptions>
                    <S.ContainerSections>
                        {menu?.sections.map((section) => (
                            <React.Fragment>
                                {
                                    selectMenuSection?.name === section.name ? (
                                        <React.Fragment key={section.name}>
                                            <S.ContainerSection onClick={() => toggleSection(section.name)}>
                                                <S.TitleSection>{section?.name}</S.TitleSection>
                                                <S.Icon src={openSections.includes(section.name) ? ArrowUp : ArrowDown} /> {/* Muda o ícone dependendo se a seção está aberta ou fechada */}
                                            </S.ContainerSection>

                                            {openSections.includes(section.name) && (
                                                section?.items.map((element) => (
                                                <MenuItem
                                                    key={element.id}
                                                    openModal={() =>
                                                    element.images
                                                        ? handleCloseOrOpenModal(element)
                                                        : handleAddToCart(element)
                                                    }
                                                    item={element}
                                                />
                                                ))
                                            )}
                                        </React.Fragment>
                                    )
                                    : 
                                    selectMenuSection === undefined &&
                                    <React.Fragment key={section.name}>
                                        <S.ContainerSection onClick={() => toggleSection(section.name)}>
                                            <S.TitleSection>{section?.name}</S.TitleSection>
                                            <S.Icon src={openSections.includes(section.name) ? ArrowUp : ArrowDown} /> {/* Muda o ícone dependendo se a seção está aberta ou fechada */}
                                        </S.ContainerSection>

                                        {openSections.includes(section.name) && (
                                            section?.items.map((element) => (
                                            <MenuItem
                                                key={element.id}
                                                openModal={() =>
                                                element.images
                                                    ? handleCloseOrOpenModal(element)
                                                    : handleAddToCart(element)
                                                }
                                                item={element}
                                            />
                                            ))
                                        )}
                                    </React.Fragment>
                                }
                                
                            </React.Fragment>
                        ))}
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
            <S.BasketButton onClick={() => handleCloseOrOpenModalBasket()}>
                <S.TitleBasketButton>Your basket • {itemsCart.length} item</S.TitleBasketButton>
            </S.BasketButton>
        </S.Container>
        {
            showModalItem && selectedItem && <ModalSelectItem closeModal={() => handleCloseOrOpenModal(selectedItem)} item={selectedItem}/>
        }
        {
            showModalBasket && <ModalBasket onClose={handleCloseOrOpenModalBasket}/>
        }
    </>
  )
}

export default MenuPage