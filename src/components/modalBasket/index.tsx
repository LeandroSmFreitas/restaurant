import * as S from "./styles"
import CloseIcon from '../../assets/close.svg'
import { UseModalBasket } from "./hooks/modal-basket";
import { ItemCartToBuy } from "../itemCart";
import { useTranslation } from "react-i18next";
import { StringUtils } from "../../utils/StringUtils";

interface Props{
  onClose: () => void;
}

const ModalBasket = ({ onClose }: Props) => {
  const { itemsCart } = UseModalBasket()
  const { t } = useTranslation()

  return (
    <S.Container>
      <S.ContainerHeader>
        <S.TitleHeader>{t("basket.title")}</S.TitleHeader>
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
          <S.SubtotalCart>{t("basket.subtotal")}</S.SubtotalCart>
          <S.SubtotalPrice>{StringUtils.formatCurrency(itemsCart.reduce(( acc, curr ) => acc + curr.total, 0))}</S.SubtotalPrice>
      </S.ContainerTotalCard>
      <S.ContainerTotalCard>
          <S.SubtotalCart>{t("basket.total")}</S.SubtotalCart>
          <S.TotalCart>{StringUtils.formatCurrency(itemsCart.reduce(( acc, curr ) => acc + curr.total, 0))}</S.TotalCart>
      </S.ContainerTotalCard>
    </S.Container>
  );
}

export default ModalBasket