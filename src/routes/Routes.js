import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Dashboard from '../components/Dashboard';
import NewProjectForm from '../components/NewProjectForm';
import LoginForm from '../components/LoginForm';
import EditProjectForm from '../components/EditProjectForm';
import ProjectsContainer from '../containers/ProjectsContainer';
import ShowProject from '../components/ShowProject';
import RegisterForm from '../components/RegisterForm';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/new" component={NewProjectForm} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/edit" component={EditProjectForm} />
      <Route exact path="/top" component={ProjectsContainer} />
      <Route exact path="/show" component={ShowProject} />
      <Route exact path="/register" component={RegisterForm} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
