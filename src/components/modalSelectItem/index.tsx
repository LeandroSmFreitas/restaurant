import * as S from './styles'
import DeductIcon from '../../assets/deduct.svg'
import PlusIcon from '../../assets/plus.svg'
import CloseIcon from '../../assets/close.svg'
import { Item } from '../../models/interfaces/Menu';
import { UseModal } from './hooks/modal-hook';
import { useTranslation } from 'react-i18next';
import { StringUtils } from '../../utils/StringUtils';

interface Props {
    closeModal: () => void;
    item: Item;
}

const ModalSelectItem = ({ closeModal, item }: Props) => {
    const { handleChooseOption, total, handleAddCart, quantity, handleChooseQuantity } = UseModal({item, closeModal})
    const { t } = useTranslation()
  
    return (
    <S.Container withoutImage={item.images ? false : true}>
        <S.ContainerModalBody withoutImage={item.images ? false : true}>
            { item.images && 
                <S.ContainerMenuItemImage url={item.images[0].image}>
                    <S.CloseButton onClick={closeModal}>
                        <S.CloseIcon src={CloseIcon}/>
                    </S.CloseButton>
                </S.ContainerMenuItemImage> 
            }
            <S.ContainerDescription>
                <S.Row>
                    <S.TitleMenuItem>{item.name}</S.TitleMenuItem>
                    { !item.images && 
                        <S.CloseButton onClick={closeModal}>
                            <S.CloseIcon src={CloseIcon}/>
                        </S.CloseButton>
                    }
                </S.Row>
                <S.DescriptionMenuItem>{item.description}</S.DescriptionMenuItem>
            </S.ContainerDescription>
            {
                item.modifiers && (
                    <S.ContainerAdditional>
                        {
                            item.modifiers.map(element => {
                                return (
                                    <>
                                    <S.ContainerTitleAdditional>
                                        <S.TitleAddtional>{t("selectItem.size.title")}</S.TitleAddtional>
                                        <S.DescriptionAdditional>{t("selectItem.size.oneOption")}</S.DescriptionAdditional>
                                    </S.ContainerTitleAdditional>
                                    {
                                        element.items.map(element => {
                                            return (
                                                <S.ContainerSize>
                                                    <S.ContainerInfoSize>
                                                        <S.TitleSize>{element.name}</S.TitleSize>
                                                        <S.ValueSize>{StringUtils.formatCurrency(element.price)}</S.ValueSize>
                                                    </S.ContainerInfoSize>
                                                    <S.Radio type="radio" name="meat" value={element.price} onChange={() => handleChooseOption(element, item.price)} />
                                                </S.ContainerSize>
                                            )
                                        })
                                    }
                                    </>
                                )
                            })
                        }
                    </S.ContainerAdditional>
                )
            }
            <S.ContainerFooterModal>
                <S.ContainerIncrement>
                    <S.PlusAndDeductButton onClick={() => handleChooseQuantity(false)}>
                        <S.PlusDeductIcon src={DeductIcon}/>
                    </S.PlusAndDeductButton>
                    <S.ValueIncrement>{quantity}</S.ValueIncrement>
                    <S.PlusAndDeductButton isPlus onClick={() => handleChooseQuantity(true)}>
                        <S.PlusDeductIcon src={PlusIcon}/>
                    </S.PlusAndDeductButton>
                </S.ContainerIncrement>
                <S.AddToCardButton onClick={() => handleAddCart(item)}>
                    <S.TitleAddToCardButton>{t("selectItem.addToBasket")} • {total !== 0 ? StringUtils.formatCurrency(total * quantity) : StringUtils.formatCurrency(item.price * quantity)}</S.TitleAddToCardButton>
                </S.AddToCardButton>
            </S.ContainerFooterModal>
        </S.ContainerModalBody>
    </S.Container>
  )
}

export default ModalSelectItem