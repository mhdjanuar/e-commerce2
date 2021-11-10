import React from 'react';
import { Route, RouteComponentProps, Redirect } from 'react-router-dom';
import Main from '../modules/App';
import { isLogin } from '../utils/token';

interface Props {
    component: React.FC<RouteComponentProps>,
    path: string,
    exact: boolean,
    auth?: boolean,
}

const isAuthenticated = isLogin();

const PrivateRoutes: React.FC<Props> = ({ component: Component, ...rest }) => (
    <Route 
        {...rest}
        render={props => (
           isAuthenticated ? 
            <Main isAuthenticated>
               <Component {...props} />
            </Main>
            : 
           <Redirect to="/login" />
        )}
    />
);

export default PrivateRoutes;