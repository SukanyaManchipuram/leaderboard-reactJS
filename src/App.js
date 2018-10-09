import React, { Component } from 'react';
import {BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Board from './components/board/Board';
import SignedIn from './components/auth/SignedIn';
import SignedUp from './components/auth/SignedUp';
import Task from './components/layout/Task';
import View1 from './components/board/views/View1';
import View2 from './components/board/views/View2';
import View3 from './components/board/views/View3';
import View4 from './components/board/views/View4';
import View5 from './components/board/views/View5';
import View6 from './components/board/views/View6';
import View7 from './components/board/views/View7';
import View8 from './components/board/views/View8';
import View9 from './components/board/views/View9';
import View10 from './components/board/views/View10';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path='/' component={Board} />
        <Route path='/signin' component={SignedIn} />
        <Route path='/signup' component={SignedUp} />
        <Route path='/task' component={Task} />
        <Route path='/charles' component={View1}/>
        <Route path='/David' component={View2}/>
        <Route path='/alice' component={View3}/>
        <Route path='/chay' component={View4}/>
        <Route path='/sid' component={View5}/>
        <Route path='/marie' component={View6}/>
        <Route path='/john' component={View7}/>
        <Route path='/sam' component={View8}/>
        <Route path='/ria' component={View9}/>
        <Route path='/harry' component={View10}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
