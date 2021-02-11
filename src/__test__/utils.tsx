import { FETCHING, RootState } from 'src/utils/types';
import { LANGUAGE } from '../translations/types';

export const mockRootStore: RootState = {
  settings: { language: LANGUAGE.EN },
  counter: { value: 0, stateGetFakeFetching: FETCHING.IDLE },
};

export default { mockRootStore };
