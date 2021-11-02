import React from 'react'
import { Switch} from 'react-router-dom'

export default function Auth(props) {
    // const getRoutes = (routes) => {
    //     return routes.map((prop, key) => {
    //         if (prop.layout === '/auth') {
    //             return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
    //         } else {
    //             return null;
    //         }
    //     });
    // };

    return (
        <div>
            <Switch>
                {/* {getRoutes(routes)}
                <Redirect from='*' to='/auth/login' /> */}
            </Switch>
        </div>
    )
}
