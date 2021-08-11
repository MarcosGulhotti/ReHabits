import { Route, Switch } from "react-router";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { Groups } from "../pages/Groups";
import { Habits } from "../pages/Habits";
import { Contact } from "../pages/Contact";
import { WorkGroup } from '../pages/WorkGroup'

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route exact path="/groups" component={Groups}/>
      <Route path="/groups/work" component={WorkGroup}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/habits" component={Habits} />
    </Switch>
  );
};