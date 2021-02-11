import { FETCHING } from 'src/utils/types';
import slice from '../slice';

const { reducer, actions } = slice;

describe('Counter/slice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual({ value: 0, stateGetFakeFetching: FETCHING.IDLE });
  });

  it(`should handle ${actions.addOne}`, () => {
    expect(reducer({ value: 0, stateGetFakeFetching: FETCHING.IDLE },
      { type: actions.addOne }))
      .toEqual({ value: 1, stateGetFakeFetching: FETCHING.IDLE });
  });

  it(`should handle ${actions.minusOne}`, () => {
    expect(reducer({ value: 0, stateGetFakeFetching: FETCHING.IDLE },
      { type: actions.minusOne }))
      .toEqual({ value: -1, stateGetFakeFetching: FETCHING.IDLE });
  });

  it(`should handle ${actions.getFakeFetching}`, () => {
    expect(reducer({ value: 0, stateGetFakeFetching: FETCHING.IDLE },
      { type: actions.getFakeFetching }))
      .toEqual({ value: 0, stateGetFakeFetching: FETCHING.DOING });
  });

  it(`should handle ${actions.getFakeFetchingSuccess}`, () => {
    expect(reducer({ value: 0, stateGetFakeFetching: FETCHING.DOING },
      { type: actions.getFakeFetchingSuccess }))
      .toEqual({ value: 0, stateGetFakeFetching: FETCHING.SUCCESS });
  });

  it(`should handle ${actions.getFakeFetchingError}`, () => {
    expect(reducer({ value: 0, stateGetFakeFetching: FETCHING.DOING },
      { type: actions.getFakeFetchingError }))
      .toEqual({ value: 0, stateGetFakeFetching: FETCHING.ERROR });
  });
});
