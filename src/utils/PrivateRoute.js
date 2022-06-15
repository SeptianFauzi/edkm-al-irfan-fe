import { Redirect, Route } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            localStorage.getItem('token') ?
                <Component {...props} />
                : <Redirect to="/" />
        )} />
    );
};
export default PrivateRoute
