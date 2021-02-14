import {Switch, Route} from 'react-router-dom';
import Profile from "../../pages/User/Profile";

const UserStackNavigator = () => {
    return (
        <Switch>
            <Route path="/user/profile">
                <Profile />
            </Route>
        </Switch>
    )
}

export default UserStackNavigator;
