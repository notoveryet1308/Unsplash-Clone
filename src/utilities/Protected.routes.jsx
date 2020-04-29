import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
function ProtectedProfileRoute({ component: Component, ...rest }) {
    const user = useSelector(state => state.user)
   
    return (
        <Route
            {...rest}
            render={props => {
                if (user.currentUser) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to={{
                        pathname: "/",
                        state: props.location
                    }
                    } />
                }
            }}
        />

    )
}

export { ProtectedProfileRoute };
