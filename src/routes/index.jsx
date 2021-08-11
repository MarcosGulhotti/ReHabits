import { Route, Switch } from "react-router";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { Groups } from "../pages/Groups";
import { Habits } from "../pages/Habits";
import { Contact } from "../pages/Contact";
import { WorkGroup } from '../pages/WorkGroup'
import { EducationGroup } from '../pages/EducationGroup'
import { FamilyGroup } from '../pages/FamilyGroup'
import { RelationshipGroup } from '../pages/RelationshipGroup'
import { FriendsGroup } from '../pages/FriendsGroup'
import { HealthyGroup } from '../pages/HealthyGroup'
import { SportsGroup } from '../pages/SportsGroup'
import { MeditationGroup } from '../pages/MeditationGroup'

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route exact path="/groups" component={Groups}/>
      <Route path="/groups/work" component={WorkGroup}/>
      <Route path='/groups/education' component={EducationGroup}/>
      <Route path='/groups/family' component={FamilyGroup}/>
      <Route path='/groups/relationship' component={RelationshipGroup}/>
      <Route path='/groups/friends' component={FriendsGroup}/>
      <Route path='/groups/healthy' component={HealthyGroup}/>
      <Route path='/groups/sports' component={SportsGroup}/>
      <Route path='/groups/meditation' component={MeditationGroup}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/habits" component={Habits} />
    </Switch>
  );
};
