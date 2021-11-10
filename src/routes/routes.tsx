import authRoute from '../modules/auth/routes';
import homeRoute from '../modules/home/routes';

export default [
    ...authRoute,
    ...homeRoute,
];