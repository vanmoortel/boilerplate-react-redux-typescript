import { FETCHING, RootState } from 'src/utils/types';

export const selectValue = (state: RootState):number => state.counter.value;
export const selectStateGetFakeFetching = (state: RootState):FETCHING => state.counter
  .stateGetFakeFetching;
