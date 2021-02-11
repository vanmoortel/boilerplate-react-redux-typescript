import { put } from '@redux-saga/core/effects'; // eslint-disable-line
import slice from '../slice';
import { fetchFakeFetching } from '../sagas';

const { actions } = slice;

describe('Counter/sagas', () => {
  const gen = fetchFakeFetching();
  it(`should handle ${actions.getFakeFetching}`, () => {
    expect(gen.next().value).toBeTruthy();
  });

  it(`should handle ${actions.getFakeFetchingSuccess}`, () => {
    expect(gen.next().value)
      .toEqual(put({ type: actions.getFakeFetchingSuccess.type }));
  });
});
