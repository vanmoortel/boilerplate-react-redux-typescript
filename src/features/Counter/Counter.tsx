/**
 *
 * Counter, you can increment, decrement or simulate an async action (saving)
 *
 */
import React from 'react';
import { Button, Space, Typography } from 'antd';
import {
  LoadingOutlined, MinusOutlined, PlusOutlined, SaveOutlined,
} from '@ant-design/icons';
import { selectMessages } from 'src/features/Settings/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { FETCHING } from 'src/utils/types';
import { selectStateGetFakeFetching, selectValue } from './selectors';
import slice from './slice';
import './Counter.less';

const { addOne, minusOne, getFakeFetching } = slice.actions;

const Counter = () => {
  const messages = useSelector(selectMessages);
  const value = useSelector(selectValue);
  const stateGetFakeFetching = useSelector(selectStateGetFakeFetching);
  const dispatch = useDispatch();
  const { Title } = Typography;

  return (
    <Space direction="vertical" align="center" size="large">
      <Title>
        {stateGetFakeFetching === FETCHING.DOING ? messages['Loading...'] : `${messages.Counter || ''}: ${value}`}
      </Title>
      <Space>
        <Button type="primary" icon={stateGetFakeFetching === FETCHING.DOING ? <LoadingOutlined /> : <PlusOutlined />} disabled={stateGetFakeFetching === FETCHING.DOING} onClick={() => dispatch(addOne())}>
          {messages['Plus one']}
        </Button>
        <Button type="primary" icon={stateGetFakeFetching === FETCHING.DOING ? <LoadingOutlined /> : <MinusOutlined />} disabled={stateGetFakeFetching === FETCHING.DOING} onClick={() => dispatch(minusOne())}>
          {messages['Minus one']}
        </Button>
        <Button type="primary" icon={stateGetFakeFetching === FETCHING.DOING ? <LoadingOutlined /> : <SaveOutlined />} disabled={stateGetFakeFetching === FETCHING.DOING} onClick={() => dispatch(getFakeFetching())}>
          {messages['Fake save']}
        </Button>
      </Space>
    </Space>
  );
};

export default Counter;
