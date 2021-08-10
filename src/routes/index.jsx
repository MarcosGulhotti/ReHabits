import { Route, Switch } from "react-router";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { Groups } from "../pages/Groups";
import { Habits } from "../pages/Habits";
import { Contact } from "../pages/Contact";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        {Home}
      </Route>
      <Route path="/login">{Login}</Route>
      <Route path="/register">{Register}</Route>
      <Route path="/dashboard">{Dashboard}</Route>
      <Route path="/groups">{Groups}</Route>
      <Route path="/contact">{Contact}</Route>
      <Route path="/habits">
        <Habits />
      </Route>
    </Switch>
  );
};
