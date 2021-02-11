import { all, takeLatest } from 'redux-saga/effects';
import { put } from '@redux-saga/core/effects'; // eslint-disable-line
import axios from 'axios';
import slice from './slice';

const { getFakeFetching, getFakeFetchingSuccess, getFakeFetchingError } = slice.actions;

export const fetchFakeFetching = function* () {
  try {
    yield axios.get('https://jsonplaceholder.typicode.com/todos/1');
    yield put({ type: getFakeFetchingSuccess.type });
  } catch (error) {
    yield put({ type: getFakeFetchingError.type });
  }
};

export default function* () {
  yield all([
    takeLatest(getFakeFetching.type, fetchFakeFetching),
  ]);
}
