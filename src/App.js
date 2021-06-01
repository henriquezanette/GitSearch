import Home from "./pages/Home";
import Pesquisa from "./pages/Pesquisa";
import Todos from "./pages/Todos";
import PerfilUsuario from './components/PerfilUsuario'
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/pesquisa" exact component={Pesquisa}/>
        <Route path="/todos" exact component={Todos}/>
        <Route path="/pesquisa/:user" component={PerfilUsuario}/>
        <Route path="/todos/:user" component={PerfilUsuario}/>
      </Switch>
      </>
    </Router>
  );
}

export default App;
