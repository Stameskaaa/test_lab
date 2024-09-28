export interface formInterface {
  agreement: boolean;
  name: string;
  phone: string;
  [key: string]: any;
}

export interface errorsInterface {
  name: BoolStr;
  phone: BoolStr;
}

export type BoolStr = [boolean, string];
