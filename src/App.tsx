import 'antd/dist/antd.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { observable } from 'mobx';
import { DemoState, Demo } from './Demo';
import { observer } from 'mobx-react';
import { DatePicker } from 'antd';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

export class AppState {
  @observable
  Demo = new DemoState();
}

export const appState = new AppState();

export const App: React.FC<{ state: AppState }> = observer(({ state }) => (
  <BrowserRouter>
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/input1'>input1</NavLink>
      <NavLink to='/input2'>input2</NavLink>
    </div>
    <Switch>
      <Route
        path='/input2'
        render={params => <div>{state.Demo.input2.value}</div>}
      />
      <Route
        path='/input1'
        render={params => <div>{state.Demo.input1.value}</div>}
      />
      <Route path='/' render={params => <Demo state={state.Demo} />} />
    </Switch>
  </BrowserRouter>
));
