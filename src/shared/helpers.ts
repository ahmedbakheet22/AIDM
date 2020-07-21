import Cookies from 'universal-cookie';
export const getCurrentLocale = (state) => (state.i18n as any).locale;
export const cookies = new Cookies();
