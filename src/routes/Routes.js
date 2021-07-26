import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/new" component={NewProjectForm} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/edit" component={EditProjectForm} />
      <Route exact path="/top" component={ProjectsContainer} />
      <Route exact path="/show" component={ShowProject} />
    </Switch>
  </BrowserRouter>
);

export default Routes;