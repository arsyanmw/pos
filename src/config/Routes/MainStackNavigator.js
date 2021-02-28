import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import AppStackNavigator from "./AppStackNavigator";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/app" />
                </Route>
                <Route path="/app">
                    <AppStackNavigator />
                </Route>

                <Route exact path="/user">
                    <Redirect to="/user/profile" />
                </Route>
                <Route path="/user/profile">
                    <AppStackNavigator />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
