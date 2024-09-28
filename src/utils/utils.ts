import { BoolStr, errorsInterface } from '../types/types';

export const validateName = (name: string): BoolStr => {
  if (!name) {
    return [true, 'Введите имя!'];
  }
  return [false, ''];
};

export const validatePhoneNumber = (phone: string): BoolStr => {
  const phoneRegex = /^\+?\d{1,3}?[-. ]?\(?\d{1,4}?\)?[-. ]?\d{1,4}[-. ]?\d{1,9}$/;

  if (!phoneRegex.test(phone)) {
    return [true, 'Неверный номер!'];
  }
  return [false, ''];
};

export const validateField = (name: string, phone: string): errorsInterface => {
  const nameError = validateName(name);
  const phoneError = validatePhoneNumber(phone);
  return { name: nameError, phone: phoneError };
};
