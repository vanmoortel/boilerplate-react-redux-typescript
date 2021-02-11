import { LANGUAGE } from 'src/translations/types';
import translations from '../index';
import en from '../en';
import fr from '../fr';

describe('translations/index', () => {
  it('should return EN messages', () => {
    expect(translations(LANGUAGE.EN)).toEqual(en);
  });
  it('should return FR messages', () => {
    expect(translations(LANGUAGE.FR)).toEqual(fr);
  });
});
