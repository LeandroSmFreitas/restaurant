import { AxiosError, AxiosResponse } from "axios";
import { Menu } from "../../models/interfaces/Menu";
import { MenuAPI } from "../menu/menuApi";
import HttpStatus from "../../models/enums/httpStatus";


export const getMenu = async (): Promise<Menu> => {
    try {
      const result: AxiosResponse<Menu, any> = await MenuAPI().getMenuItems();
      if (result.status === HttpStatus.OK && result.data != null) {
        return Promise.resolve(result.data);
      } else if (result.status === HttpStatus.UNAUTHORIZED) {
        return Promise.reject({ status: 401 } as AxiosResponse);
      } else {
        return Promise.reject({ status: result.status } as AxiosResponse);
      }
    } catch (error) {
      const { response } = error as AxiosError;

      return Promise.reject(response);
    }
}; 