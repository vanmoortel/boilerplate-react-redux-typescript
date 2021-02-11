import { mockRootStore } from 'src/__test__/utils';
import { FETCHING } from 'src/utils/types';
import { selectValue, selectStateGetFakeFetching } from '../selectors';

describe('Counter/selectors', () => {
  it('should return 0', () => {
    expect(selectValue(mockRootStore)).toEqual(0);
  });

  it('should return IDLE', () => {
    expect(selectStateGetFakeFetching(mockRootStore)).toEqual(FETCHING.IDLE);
  });
});
