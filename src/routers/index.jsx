import {DynamicRouter} from './routerConst'
import ApplicationRoute from '../components/ApplicationRouter'

import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

const Routers = () => {
    return (
        <Router>
            <Switch>
                {DynamicRouter.map((routeItem, index) => {
                    return (
                        <ApplicationRoute
                            key={index}
                            path={routeItem.path}
                            lazyPath={routeItem.importPath}
                        />
                    )
                })}
            </Switch>
        </Router>
    )
}

export default Routers