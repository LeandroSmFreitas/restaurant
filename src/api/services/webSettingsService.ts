import { AxiosError, AxiosResponse } from "axios";
import HttpStatus from "../../models/enums/httpStatus";
import { WebSettingsAPI } from "../configs/webSettingsApi";
import { Venue } from "../../models/interfaces/WebSettings";


export const getWebSettings = async (): Promise<Venue> => {
    try {
      const result: AxiosResponse<Venue, any> = await WebSettingsAPI().getWebSettings();
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