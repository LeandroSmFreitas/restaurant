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
import { useTranslation } from "react-i18next"
import { StringUtils } from "../../utils/StringUtils"


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
        handleCloseOrOpenModalBasket,
        handleSearch,
        resultQuery,
    } = useMenu();
    const { t } = useTranslation()
    
  return (
    <>
        <Header/>
        <S.Container>
            <Search handleSearch={handleSearch}/>
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
                        {resultQuery.length === 0 ? menu?.sections.map((section) => (
                            <React.Fragment>
                                {
                                    selectMenuSection?.name === section.name ? (
                                        <React.Fragment key={section.name}>
                                            <S.ContainerSection onClick={() => toggleSection(section.name)}>
                                                <S.TitleSection>{section?.name}</S.TitleSection>
                                                <S.Icon src={openSections.includes(section.name) ? ArrowUp : ArrowDown} />
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
                                            <S.Icon src={openSections.includes(section.name) ? ArrowUp : ArrowDown} />
                                        </S.ContainerSection>

                                        {openSections.includes(section.name) && (
                                            section?.items.map((element) => (
                                            <React.Fragment>
                                                {
                                                    element.images ?
                                                        <MenuItem
                                                            key={element.id}
                                                            openModal={() => handleCloseOrOpenModal(element)}
                                                            item={element}
                                                        />
                                                        :
                                                        <MenuItem
                                                            key={element.id}
                                                            openModal={() => handleAddToCart(element)}
                                                            item={element}
                                                        />
                                                }
                                            </React.Fragment>
                                            ))
                                        )}
                                    </React.Fragment>
                                }
                                
                            </React.Fragment>
                        ))
                        :
                            <MenuItem
                                key={resultQuery[0].id}
                                openModal={() =>
                                resultQuery[0].images
                                    ? handleCloseOrOpenModal(resultQuery[0])
                                    : handleAddToCart(resultQuery[0])
                                }
                                item={resultQuery[0]}
                            />
                        }
                    </S.ContainerSections>
                </S.ContainerMenu>
                <S.ContainerCard>
                    <S.ContainerTitleCard>
                        <S.TitleCart>{t("basket.title")}</S.TitleCart>
                    </S.ContainerTitleCard>
                    {
                        <>
                            {
                                itemsCart.map(element => {
                                    return (
                                        <ItemCartToBuy itemCart={element}/>
                                    )
                                })
                            }
                            <S.ContainerTotalCard>
                                <S.SubtotalCart>{t("basket.subtotal")}</S.SubtotalCart>
                                <S.SubtotalPrice>{StringUtils.formatCurrency(itemsCart.reduce(( acc, curr ) => acc + curr.total, 0))}</S.SubtotalPrice>
                            </S.ContainerTotalCard>
                            <S.ContainerTotalCard>
                                <S.SubtotalCart>{t("basket.total")}</S.SubtotalCart>
                                <S.TotalCart>{StringUtils.formatCurrency(itemsCart.reduce(( acc, curr ) => acc + curr.total, 0))}</S.TotalCart>
                            </S.ContainerTotalCard>
                        </>
                    }
                </S.ContainerCard>
            </S.ContainerMenuAndCart>
            <S.BasketButton onClick={() => handleCloseOrOpenModalBasket()}>
                <S.TitleBasketButton>{t("basket.yourBasket")} • {itemsCart.length} item</S.TitleBasketButton>
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