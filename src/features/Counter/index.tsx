import Counter from './Counter';
import slice from './slice';
import sagas from './sagas';

export const { actions, reducer } = slice;
export { sagas };
export default Counter;
