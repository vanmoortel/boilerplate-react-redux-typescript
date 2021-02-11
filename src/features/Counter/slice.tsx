import { createSlice } from '@reduxjs/toolkit';
import { FETCHING } from 'src/utils/types';
import { State } from './types';

const slice = createSlice({
  name: 'counter',
  initialState: { value: 0, stateGetFakeFetching: FETCHING.IDLE },
  reducers: {
    addOne: (state: State) => ({ ...state, value: state.value + 1 }),
    minusOne: (state: State) => ({ ...state, value: state.value - 1 }),
    getFakeFetching: (state: State) => ({ ...state, stateGetFakeFetching: FETCHING.DOING }),
    getFakeFetchingSuccess:
        (state: State) => ({ ...state, stateGetFakeFetching: FETCHING.SUCCESS }),
    getFakeFetchingError: (state: State) => ({ ...state, stateGetFakeFetching: FETCHING.ERROR }),
  },
});

export default slice;
