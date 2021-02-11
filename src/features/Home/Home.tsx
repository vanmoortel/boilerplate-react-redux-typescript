/**
 *
 * Home page with a link to counter, to illustrate the router mechanism
 *
 */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Space, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { selectMessages } from '../Settings/selectors';
import './Home.less';

const { Title } = Typography;

const Home = () => {
  const messages = useSelector(selectMessages);
  const [isShowCounter, setIsShowCounter] = useState(false);

  if (isShowCounter) return (<Redirect exact from="/" to="/counter" />);
  return (
    <Space direction="vertical" size="large">
      <Title>
        {messages['Boilerplate with react, redux, saga, typescript, internationalisation and Ant design']}
      </Title>
      <Button type="text" color="primary" size="large" onClick={() => setIsShowCounter(true)} className="font-x-large">
        {messages['Try counter...']}
      </Button>
    </Space>

  );
};

export default Home;
