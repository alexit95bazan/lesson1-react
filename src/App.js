import React, { Component } from 'react';
import './App.css';
import guests from './guests.json';
import searchIcon from './zoom.png' 

import List from './List.js';
import Search from './Search.js';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      guests: [],
      filtered: []
    }
  }
  
  componentWillMount() {
    this.setState({
      guests,
      filteredPoets: guests
    })
  }

  filterPoets = (guestsFilter) => {
    let filtered = this.state.guests
    filtered = filtered.filter((guests) => {
      let guestName = guests.name.toLowerCase() + guests.phone.toLowerCase()
      return guestName.indexOf(guestsFilter.toLowerCase()) !== -1
    })
    this.setState({
      filtered
    })
  }

  render() {
    const { guests } = this.state;

    return (
      <div className="app">
        <div className="app-list">
          <header>
            <div className="col-8">
              <div className="block">
                <h1>Список гостей <span>Список жертв</span></h1>
              </div>
            </div>
            <div className="col-4">
              <div className="block">
                <button className="search">
                  <img src={searchIcon} alt={"Поиск"}/>
                </button>
              </div>
            </div>
          </header>
          <div className="search-box">
            <Search/>
          </div>
          <ul>
          { guests.map( guest => (<List guest={guest} key={guest.index} onChange={this.filterGuests}/>)) }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
