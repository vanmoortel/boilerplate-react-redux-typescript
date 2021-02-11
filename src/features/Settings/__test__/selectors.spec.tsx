import { LANGUAGE } from 'src/translations/types';
import translations from 'src/translations';
import { mockRootStore } from 'src/__test__/utils';
import { selectLanguage, selectMessages } from '../selectors';

describe('Settings/selectors', () => {
  it('should return EN', () => {
    expect(selectLanguage(mockRootStore)).toEqual(LANGUAGE.EN);
  });

  it('should return translated message', () => {
    expect(selectMessages(mockRootStore)).toEqual(translations(LANGUAGE.EN));
  });
});
