import { useDispatch } from "react-redux";
import { ItemCart } from "../../../models/interfaces/CartItems"
import { decrementQuantity, incrementQuantity } from "../../../store/cart/reducer";

interface Props{
    itemCart: ItemCart
}

export const UseItemCart = ({ itemCart }:Props) => {
    const dispatch = useDispatch();

    const handleIncrementOrDeduct = (add: boolean) => {
        if(add){
            dispatch(incrementQuantity(itemCart))
        }else{
            dispatch(decrementQuantity(itemCart))
        }
    }

    return{
        handleIncrementOrDeduct
    }
}