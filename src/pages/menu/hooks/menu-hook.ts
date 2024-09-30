import { useEffect, useState } from "react"
import { getMenu } from "../../../api/services/menuService"
import { Item, Menu, Section } from "../../../models/interfaces/Menu"
import { useAppSelector } from "../../../store/store"
import { useDispatch } from "react-redux"
import { addToCart } from "../../../store/cart/reducer"


export const useMenu = () => {
    const [showModal, setShowModal] = useState(false)
    const [menu, setMenu] = useState<Menu>()
    const [selectMenuSection, setSelectMenuSection] = useState<Section>()
    const [selectedItem, setSelectedItem] = useState<Item>()
    const itemsCart = useAppSelector((state) => state.cart.items);
    const dispatch = useDispatch()

    const handleCloseOrOpenModal = (item?: Item) => {
        if(item){
            setSelectedItem(item)
        }
        setShowModal(!showModal)
    }

    useEffect(() => {
    const getMenuItems = async () => {
            const menuResponse = await getMenu()
            setMenu(menuResponse)
    }
    getMenuItems()
    }, [])

    const handleAddToCart = (item: Item) => {
        dispatch(addToCart({
            item,
            total: item.price,
            quantity: 1
        }))
    }

    return {
        handleCloseOrOpenModal,
        showModal,
        menu,
        setSelectMenuSection,
        selectMenuSection,
        selectedItem,
        itemsCart,
        handleAddToCart
    }
}