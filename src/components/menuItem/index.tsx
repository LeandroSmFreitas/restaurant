import { Item } from "../../models/interfaces/Menu";
import { StringUtils } from "../../utils/StringUtils";
import * as S from "./styles"

interface Props{
  openModal: () => void;
  item: Item
}

const MenuItem = ({ openModal, item }:Props) => {
  return (
    <S.Container onClick={openModal}>
      <S.ContainerInfos>
        <S.Title>{item.name}</S.Title>
        {item.description && <S.Description>{StringUtils.formatDescription(item?.description!)}</S.Description> }
        <S.Value>R${item.price}</S.Value>
      </S.ContainerInfos>
      {item.images &&  <S.ImageItem src={item.images[0].image}/> }
    </S.Container>
  )
}

export default MenuItem