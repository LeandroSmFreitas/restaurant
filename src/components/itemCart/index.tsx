import { ItemCart } from "../../models/interfaces/CartItems"
import * as S from "./styles"
import PlusIcon from '../../assets/plus.svg'
import DeductIcon from '../../assets/deductWhite.svg'
import { UseItemCart } from "./hooks/itemCart"
import { StringUtils } from "../../utils/StringUtils"

interface Props{
    itemCart: ItemCart
}

export const ItemCartToBuy = ({ itemCart }:Props) => {
    const { handleIncrementOrDeduct } = UseItemCart({itemCart})
    return(
        <S.Container>
            <S.ContainerTitleAndPrice>
                <S.Title>{itemCart.item.name}</S.Title>
                <S.Price>{StringUtils.formatCurrency(itemCart.total)}</S.Price>
            </S.ContainerTitleAndPrice>
            {itemCart.modifierItem?.name && <S.Modifier>{itemCart.modifierItem.name}</S.Modifier> }
            <S.ContainerIncrement>
                    <S.PlusAndDeductButton onClick={() => handleIncrementOrDeduct(false)}>
                        <S.PlusDeductIcon src={DeductIcon}/>
                    </S.PlusAndDeductButton>
                    <S.ValueIncrement>{itemCart.quantity}</S.ValueIncrement>
                    <S.PlusAndDeductButton onClick={() => handleIncrementOrDeduct(true)}>
                        <S.PlusDeductIcon src={PlusIcon}/>
                    </S.PlusAndDeductButton>
            </S.ContainerIncrement>
        </S.Container>
    )
} 