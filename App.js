import React,{useState,useEffect}  from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Pokelist from './components/Pokelist';
import PokeDetail from './components/PokeDetails';


class App extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Pokelist}/>
                    <Route path="/:pokemon" exact component={PokeDetail}/>
                </Switch>
            </Router>
        );
    }
}

export default App;