import * as S from './styles'
import DeductIcon from '../../assets/deduct.svg'
import PlusIcon from '../../assets/plus.svg'
import CloseIcon from '../../assets/close.svg'
import { Item } from '../../models/interfaces/Menu';
import { UseModal } from './hooks/modal-hook';

interface Props {
    closeModal: () => void;
    item: Item;
}

const ModalSelectItem = ({ closeModal, item }: Props) => {
    const { handleChooseOption, total, handleAddCart, quantity, handleChooseQuantity } = UseModal({item, closeModal})
  
    return (
    <S.Container>
        <S.ContainerModalBody>
            <S.ContainerMenuItemImage url={item.images[0].image}>
                <S.CloseButton onClick={closeModal}>
                    <S.CloseIcon src={CloseIcon}/>
                </S.CloseButton>
            </S.ContainerMenuItemImage>
            <S.ContainerDescription>
                <S.TitleMenuItem>{item.name}</S.TitleMenuItem>
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
                                        <S.TitleAddtional>Escolha seu tamanho</S.TitleAddtional>
                                        <S.DescriptionAdditional>Selecione 1 opção</S.DescriptionAdditional>
                                    </S.ContainerTitleAdditional>
                                    {
                                        element.items.map(element => {
                                            return (
                                                <S.ContainerSize>
                                                    <S.ContainerInfoSize>
                                                        <S.TitleSize>{element.name}</S.TitleSize>
                                                        <S.ValueSize>R${element.price}</S.ValueSize>
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
                    <S.TitleAddToCardButton>Add to Order • ${total !== 0 ? total * quantity : item.price * quantity}</S.TitleAddToCardButton>
                </S.AddToCardButton>
            </S.ContainerFooterModal>
        </S.ContainerModalBody>
    </S.Container>
  )
}

export default ModalSelectItem