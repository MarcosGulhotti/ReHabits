import { Route, Switch } from "react-router";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { Groups } from "../pages/Groups";
import { Habits } from "../pages/Habits";
import { Contact } from "../pages/Contact";
import { SpecifyGroup } from '../pages/SpecifyGroup'
import { Profile } from '../pages/Profile'

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/groups" component={Groups}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/habits" component={Habits} />
      <Route path="/profile" component={Profile} />
      <Route exact path="/:id" component={SpecifyGroup}/>
    </Switch>
  );
};
