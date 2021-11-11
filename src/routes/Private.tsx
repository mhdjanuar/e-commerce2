import React from 'react';
import { Route, RouteComponentProps, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../store/reducers';
import Main from '../modules/App';
//import { isLogin } from '../utils/token';

interface Props {
    component: React.FC<RouteComponentProps>,
    path: string,
    exact: boolean,
    auth?: boolean,
    isAuthenticated?: boolean,
}

//const isAuthenticated = isLogin();

const PrivateRoutes: React.FC<Props> = ({ component: Component, isAuthenticated, ...rest }) => {

    //-----Redux State-----//
    isAuthenticated = useSelector((state: ApplicationState) => state.auth.isAuthenticated);

    return (
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
    )
}


export default PrivateRoutes;