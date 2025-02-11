import { ErrorMessages } from "../utils/types";
import { useState } from "react";

export const useErrorHandler = () => {
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({});

  const parseError = (error: any) => {
    let newErrors: ErrorMessages = {};

    if (error?.data?.message) {
      const errorMessage = error.data.message;

      if (errorMessage.includes("telegramUsername")) {
        newErrors.telegramUsername = "Username allaqachon mavjud!";
      }
      if (errorMessage.includes("phone")) {
        newErrors.phone = "Bu telefon raqam allaqachon mavjud!";
      }
    } else if (error?.data) {
      let errorMessages = error.data
      newErrors.general = error.data;
        if (errorMessages.includes("Password")) {
          newErrors.password = "Parolni xato kiritdingiz!";
        }
        if (errorMessages.includes("phone")) {
          newErrors.phone = "Telefon raqami topilmadi!";
        }
    } else if (error?.data?.error) {
      newErrors.general = error.data?.error;
    } else {
      newErrors.general = "Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.";
    }

    setErrorMessages(newErrors);
  };

  return { errorMessages, parseError, setErrorMessages };
};
