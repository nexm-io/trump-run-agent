import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { config } from "src/constants/constants";
import CryptoJS from "crypto-js";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export function encryptData(authData: string) {
  return "";
}
