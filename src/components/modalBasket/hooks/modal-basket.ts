import { useAppSelector } from "../../../store/store";


export const UseModalBasket = () => {
    const itemsCart = useAppSelector((state) => state.cart.items);


    return{
        itemsCart
    }
}