import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

interface Props {
    component: React.FC<RouteComponentProps>,
    path: string,
    exact: boolean,
}

const PublicRoutes: React.FC<Props> = ({ component: Component, ...rest }) => (
    <Route 
        {...rest}
        render={props => (
            <Component {...props} />
        )}
    />
);

export default PublicRoutes;