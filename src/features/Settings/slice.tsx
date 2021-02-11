import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LANGUAGE } from 'src/translations/types';
import { State } from './types';

export default createSlice({
  name: 'settings',
  initialState: { language: LANGUAGE.EN },
  reducers: {
    setLanguage:
        (state: State, action: PayloadAction<LANGUAGE>) => ({ ...state, language: action.payload }),
  },
});
