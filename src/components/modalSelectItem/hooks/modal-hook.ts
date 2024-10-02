import { useState } from "react"
import { useDispatch } from "react-redux";
import { Item, ModifierItem } from "../../../models/interfaces/Menu";
import { addToCart } from "../../../store/cart/reducer";

interface Props {
    item: Item;
    closeModal: () => void;
}

export const UseModal = ({ item, closeModal }: Props) => {
    const [total, setTotal] = useState(item.price)
    const [quantity, setQuantity] = useState(1)
    const [modifierItem, setModifierItem] = useState<ModifierItem>()
    const dispatch = useDispatch();

    const handleChooseOption = (modifierItem: ModifierItem, price: number) => {
            setModifierItem(modifierItem)
            setTotal(modifierItem.price + price)
    }

    const handleAddCart = (item: Item) => {
        dispatch(addToCart({
            item,
            modifierItem,
            total: total * quantity,
            quantity
        }))
        closeModalItem()
    }

    const closeModalItem = () => {
        closeModal()
    }

    const handleChooseQuantity = (add: boolean) => {
        if(add){
            setQuantity(quantity + 1)
        }else if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return {
        handleChooseOption,
        total,
        handleAddCart,
        handleChooseQuantity,
        quantity
    }
}