/* eslint-disable prettier/prettier */
export type Replace<T, R> = Omit<T, keyof R> & R;
