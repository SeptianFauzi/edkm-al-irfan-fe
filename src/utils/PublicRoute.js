import { Redirect, Route } from "react-router";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            localStorage.getItem('token') && restricted ?
                <Redirect to="/" />
                : <Component {...props} />
        )} />
    );
};
export default PublicRoute;