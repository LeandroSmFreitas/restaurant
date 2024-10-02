import { Item } from "../../models/interfaces/Menu";
import { StringUtils } from "../../utils/StringUtils";
import { UseMenuItem } from "./hooks/menu-item";
import * as S from "./styles"

interface Props{
  openModal: () => void;
  item: Item;
}

const MenuItem = ({ openModal, item }:Props) => {
  const { showValueInBasket } = UseMenuItem({ item })

  return (
    <S.Container onClick={openModal}>
      <S.ContainerInfos>
        <S.ContainerTitleAndValueInBasket>
          {
            showValueInBasket(item.name) > 0 &&
              <S.ContainerValueInBasket>
                <S.ValueInBasket>{showValueInBasket(item.name)}</S.ValueInBasket>
              </S.ContainerValueInBasket>
          }
          <S.Title>{item.name}</S.Title>
        </S.ContainerTitleAndValueInBasket>
        {item.description && <S.Description>{StringUtils.formatDescription(item.description)}</S.Description> }
        <S.Value>{StringUtils.formatCurrency(item.price)}</S.Value>
      </S.ContainerInfos>
      {item.images &&  <S.ImageItem src={item.images[0].image}/> }
    </S.Container>
  )
}

export default MenuItem