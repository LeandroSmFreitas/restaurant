import { Venue } from "../../models/interfaces/WebSettings";
import api from "../api";

export const WebSettingsAPI = () => {
    
    const getWebSettings = () => {
      return api.get<Venue>('/venue/9');
    };

    return {
        getWebSettings
    };
};