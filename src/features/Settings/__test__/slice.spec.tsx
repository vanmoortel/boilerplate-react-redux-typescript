import { LANGUAGE } from 'src/translations/types';
import slice from '../slice';

const { reducer, actions } = slice;

describe('Settings/slice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual({ language: LANGUAGE.EN });
  });

  it(`should handle ${actions.setLanguage}`, () => {
    expect(reducer({ language: LANGUAGE.EN }, { type: actions.setLanguage, payload: LANGUAGE.FR }))
      .toEqual({ language: LANGUAGE.FR });
  });
});
