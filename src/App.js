import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Overview } from './pages/Overview';
import { Users, Revenue } from './pages/Overview';
import {Reports, ReportsOne, ReportsTwo } from './pages/Reports';
import { Todo, TodoOne, TodoTwo } from './pages/Todo';


function App() {
  return (
    <Router>
      <Sidebar />
        <Switch>
            <Route path='/overview' exact component={Overview} />
            <Route path='/overview/users' exact component={Users} />
            <Route path='/overview/revenue' exact component={Revenue} />
            <Route path='/reports' exact component={Reports} />
            <Route path='/reports/report1' exact component={ReportsOne} />
            <Route path='/reports/report2' exact component={ReportsTwo} />
            <Route path='/todo' exact component={Todo} />
            <Route path='/todo/todo1' exact component={TodoOne} />
            <Route path='/todo/todo2' exact component={TodoTwo} />
            
        </Switch>

    </Router>
  );
}

export default App;
