import { RootState } from 'src/utils/types';
import translations from 'src/translations';
import { LANGUAGE } from 'src/translations/types';

export const selectLanguage = (state: RootState):LANGUAGE => state.settings.language;
export const selectMessages = (state: RootState):any => translations(state.settings.language) || {};
