import React, {lazy, Suspense} from "react"

import {Route} from 'react-router-dom'
import BallLoading from '../BallLoader'
import PublicRoute from '../PublicRoute'

const ApplicationRouter = ({component: Component,  ...rest}) => {
    const lazyComponent = (path) => {
        return lazy(() => import(`../../views/${path}`))
    }
    return (
        <Route
            {...rest}
            exact
            render={(props) => {
                return (
                    <>
                            <Suspense fallback={<BallLoading/>}>
                                    <PublicRoute component={lazyComponent(rest.lazyPath)}/>
                            </Suspense>
                    </>
                )
            }}
        />
    )
}

export default React.memo(ApplicationRouter)
