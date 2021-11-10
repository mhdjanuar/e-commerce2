import loadable from '@loadable/component';

export default [
  {
    path: '/login',
    auth: false,
    exact: true,
    component: loadable(() => import('./index'))
  }
];