import { useEffect, useState } from "react"
import { getMenu } from "../../../api/services/menuService"
import { Item, Menu, Section } from "../../../models/interfaces/Menu"


export const useMenu = () => {
    const [showModal, setShowModal] = useState(false)
    const [menu, setMenu] = useState<Menu>()
    const [selectMenuSection, setSelectMenuSection] = useState<Section>()
    const [selectedItem, setSelectedItem] = useState<Item>()

    const handleCloseOrOpenModal = (item?: Item) => {
        if(item){
            setSelectedItem(item)
        }
        setShowModal(!showModal)
    }

    useEffect(() => {
    const getMenuItems = async () => {
            const menuResponse = await getMenu()

            console.log(menuResponse)
            setMenu(menuResponse)
    }
    getMenuItems()
    }, [])

    return {
        handleCloseOrOpenModal,
        showModal,
        menu,
        setSelectMenuSection,
        selectMenuSection,
        selectedItem
    }
}