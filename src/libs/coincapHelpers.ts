import axios, { AxiosError, AxiosResponse } from "axios";
import { CryptoResponse } from "../types/ApiResponseTypes";

async function getCrypto(): Promise<CryptoResponse | AxiosError> {
  try {
    const response: AxiosResponse<CryptoResponse> = await axios.get("/assets");
    return response.data;
  } catch (error) {
    return error as AxiosError;
  }
}

export default getCrypto;
