import React from 'react'
import { BrowserRouter as  Route,  Switch, Redirect } from 'react-router-dom'

import Header from '../../components/header'
import routes from '../../routes';

export default function Auth(props) {
    console.log("🚀 ~ file: index.js ~ line 8 ~ Auth ~ props", props)
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === '/auth') {
                console.log(1);
                return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
            } else {
                return null;
            }
        });
    };

    return (
        <div>
            <Header />
            <Switch>
                {getRoutes(routes)}
                <Redirect from='*' to='/auth/login' />
            </Switch>
        </div>
    )
}
