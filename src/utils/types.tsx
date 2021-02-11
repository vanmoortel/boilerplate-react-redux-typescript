import { reducer } from 'src/redux';

// REDUX
/** Global Store of Redux */
export type RootState = ReturnType<typeof reducer>;

// CONSTANTS
/** Enum for status of async fetching IDLE => DOING => SUCCESS || ERROR */
export enum FETCHING {
  IDLE,
  DOING,
  SUCCESS,
  ERROR,
}
