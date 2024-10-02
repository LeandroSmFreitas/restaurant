import * as S from "./styles"
import CloseIcon from '../../assets/close.svg'
import { UseModalBasket } from "./hooks/modal-basket";
import { ItemCartToBuy } from "../itemCart";

interface Props{
  onClose: () => void;
}

const ModalBasket = ({ onClose }: Props) => {
  const { itemsCart } = UseModalBasket()
  return (
    <S.Container>
      <S.ContainerHeader>
        <S.TitleHeader>Basket</S.TitleHeader>
        <S.CloseButton onClick={() => onClose()}>
            <S.CloseIcon src={CloseIcon}/>
        </S.CloseButton>
      </S.ContainerHeader>
      {itemsCart.map(element => {
        return (
          <ItemCartToBuy itemCart={element}/>
        )
      })}
      <S.ContainerTotalCard showBorder>
          <S.SubtotalCart>Sub total</S.SubtotalCart>
          <S.SubtotalPrice>R$:{itemsCart.reduce(( acc, curr ) => acc + curr.total, 0)}</S.SubtotalPrice>
      </S.ContainerTotalCard>
      <S.ContainerTotalCard>
          <S.SubtotalCart>Total</S.SubtotalCart>
          <S.TotalCart>R$:{itemsCart.reduce(( acc, curr ) => acc + curr.total, 0)}</S.TotalCart>
      </S.ContainerTotalCard>
    </S.Container>
  );
}

export default ModalBasket