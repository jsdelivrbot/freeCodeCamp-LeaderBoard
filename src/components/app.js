import React, { Component } from 'react';
import axios from "axios";

import CamperList from './camper_list';

export default class App extends Component {

constructor(props){
  super(props);
  this.state = {
    recentCampers: [],
    allTimeCampers: [],
    currentView: 'recentCampers'
  };
}

componentWillMount() {
  axios.all([this.fetchRecentCampers(), this.fetchAllTimeCampers()])
  .then(axios.spread((recentCampers, allTimeCampers) => {
    this.setState({
      recentCampers: recentCampers.data,
      allTimeCampers: allTimeCampers.data
    });
  }));
}

fetchRecentCampers() {
  return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
}

fetchAllTimeCampers(){
  return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
}

changeView(currentView){
  this.setState({ currentView });
}

  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <a href="https://www.freecodecamp.com"><img src="https://www.freecodecamp.com/design-style-guide/img/freeCodeCamp.svg" alt="freeCodeCamp logo" /></a>
        </div>
        <h4>FreeCodeCamp React Project #2</h4>
        <div className="container">
          <h3 className="centered">{`Viewing Top ${this.state.currentView}`}</h3>
          <button onClick={() => this.changeView('recentCampers')} className="btn btn-black">Recent</button>
          <button onClick={() => this.changeView('allTimeCampers')} className="btn btn-black">All Time</button>
          <CamperList campers={this.state[this.state.currentView]} />
        </div>
        <footer>
        <p>Created by <a href="https://www.freecodecamp.com/panosthodos">Panos Thodos</a></p>
        </footer>
      </div>
    );
  }
}
