// import logo from './logo.svg';
import './App.css';
import { Component, Fragment } from 'react';
import {Card} from "./components/Card";
import { Modal } from './components/modal';

class App extends Component{

  constructor() {
    super();

    this.state = {
      rockets: []
    }
  }

  componentDidMount(){
    fetch('https://api.spacexdata.com/v4/rockets')
    .then((response) => response.json())
    .then(rockets => this.setState({rockets: rockets}))
  }

  render() {
    return (
      <div className="container"> 
        <h1>SpaceX React Application By Utkarsh Dubey</h1>
        <div className="row">
          {this.state.rockets.map((rocket) => (
            <Fragment>
              <Card rocket={rocket}/>
              <Modal rocket={rocket}/>
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
