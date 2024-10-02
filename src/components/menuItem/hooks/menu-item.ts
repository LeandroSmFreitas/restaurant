import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/store";
import { StringUtils } from "../../../utils/StringUtils";
import { Item } from "../../../models/interfaces/Menu";

interface UseMenuItem {
    item: Item;
}

export const UseMenuItem = ({ item }: UseMenuItem) => {
    const itemsCart = useAppSelector((state) => state.cart.items);
    
    const showValueInBasket = (name: string) => {
        const item = itemsCart.find(element => element.item.name === name);
        return item?.quantity ?? 0;
    }

    return{
        showValueInBasket,
    }
    
}