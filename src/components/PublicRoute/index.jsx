import {Route} from 'react-router-dom'
import React from 'react'

const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                return <Component {...props} />
            }}
        />
    )
}

export default React.memo(PublicRoute)
