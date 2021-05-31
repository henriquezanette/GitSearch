import Home from "./pages/Home";
import Pesquisa from "./pages/Pesquisa";
import Todos from "./pages/Todos";
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/pesquisa" component={Pesquisa}/>
        <Route path="/todos" component={Todos}/>
      </Switch>
      </>
    </Router>
  );
}

export default App;
