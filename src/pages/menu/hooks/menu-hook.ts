import { useEffect, useState } from "react"
import { getMenu } from "../../../api/services/menuService"
import { Item, Menu, Section } from "../../../models/interfaces/Menu"
import { useAppSelector } from "../../../store/store"
import { useDispatch } from "react-redux"
import { addToCart } from "../../../store/cart/reducer"


export const useMenu = () => {
    const [showModalItem, setShowModalItem] = useState(false)
    const [showModalBasket, setShowModalBasket] = useState(false)
    const [menu, setMenu] = useState<Menu>()
    const [selectMenuSection, setSelectMenuSection] = useState<Section>()
    const [selectedItem, setSelectedItem] = useState<Item>()
    const [openSections, setOpenSections] = useState<string[]>([]);
    const itemsCart = useAppSelector((state) => state.cart.items);
    const dispatch = useDispatch()

    const handleCloseOrOpenModal = (item?: Item) => {
        if(item){
            setSelectedItem(item)
        }
        setShowModalItem(!showModalItem)
    }

    const handleCloseOrOpenModalBasket = () => {
        setShowModalBasket(!showModalBasket)
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

    const toggleSection = (sectionName: string) => {
        if (openSections.includes(sectionName)) {
          setOpenSections(openSections.filter(name => name !== sectionName));
        } else {
          setOpenSections([...openSections, sectionName]);
        }
    };
    
    const handleSelectMenuSection = (value: Section) => {
        if(selectMenuSection?.name === value.name){
            setSelectMenuSection(undefined)
        }else{
            setSelectMenuSection(value)
        }
    }



    return {
        handleCloseOrOpenModal,
        showModalItem,
        menu,
        handleSelectMenuSection,
        selectMenuSection,
        selectedItem,
        itemsCart,
        handleAddToCart,
        toggleSection,
        openSections,
        handleCloseOrOpenModalBasket,
        showModalBasket
    }
}