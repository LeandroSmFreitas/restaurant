import * as S from './styles'
import DeductIcon from '../../assets/deduct.svg'
import PlusIcon from '../../assets/plus.svg'
import CloseIcon from '../../assets/close.svg'
import { Item } from '../../models/interfaces/Menu';

interface Props {
    closeModal: () => void;
    item: Item;
}

const ModalSelectItem = ({ closeModal, item }: Props) => {
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
                                                    <S.Radio type="radio" name="meat" value="1" />
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
                    <S.PlusAndDeductButton>
                        <S.PlusDeductIcon src={DeductIcon}/>
                    </S.PlusAndDeductButton>
                    <S.ValueIncrement>1</S.ValueIncrement>
                    <S.PlusAndDeductButton isPlus>
                        <S.PlusDeductIcon src={PlusIcon}/>
                    </S.PlusAndDeductButton>
                </S.ContainerIncrement>
                <S.AddToCardButton>
                    <S.TitleAddToCardButton>Add to Order • $11.75</S.TitleAddToCardButton>
                </S.AddToCardButton>
            </S.ContainerFooterModal>
        </S.ContainerModalBody>
    </S.Container>
  )
}

export default ModalSelectItem