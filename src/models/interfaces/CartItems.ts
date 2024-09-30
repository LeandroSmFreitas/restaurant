import { Item, ModifierItem } from "./Menu";


export interface ItemCart {
    item: Item,
    modifierItem?: ModifierItem,
    total: number,
    quantity: number,
}

export interface cartItems{
    items: ItemCart[]
}