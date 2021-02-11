/**
 *
 * Loading screen for first time app is open
 *
 */
import React from 'react';
import { Spin } from 'antd';
import translations from 'src/translations';
import { Props } from './types';

// eslint-disable-next-line react/prop-types
const SuspenseLoading: React.FC<Props> = React.memo<Props>(({ language }) => (
  <Spin tip={translations(language)['Loading...']} />
));

export default SuspenseLoading;
