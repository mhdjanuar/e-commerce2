import React from 'react';
import loadable from '@loadable/component';

export default [
  {
    path: '/',
    auth: true,
    exact: true,
    component: loadable(() => import('./index'))
  }
];