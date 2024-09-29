import { Menu } from "../../models/interfaces/Menu";
import api from "../api";



export const MenuAPI = () => {
    
    const getMenuItems = () => {
      return api.get<Menu>('/menu');
    };

    return {
        getMenuItems
    };
  };