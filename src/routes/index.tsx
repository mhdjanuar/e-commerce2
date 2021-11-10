import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import PrivateRoute from './Private';
import PublicRoute from './Public';
import NotFound from '../components/errors';

interface RouteProps {
    auth?: boolean,
    component: any,
    path: string,
    exact: boolean,
}

const Routes = () => {
    return (
        <Router>
            <Switch>
                {routes.map((route: RouteProps, i) => {
                    if (route.auth) {
                        return <PrivateRoute key={i} {...route} />;
                    }
                    return <PublicRoute key={i} {...route} />;
                })}
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routes;
