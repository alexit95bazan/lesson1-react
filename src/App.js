import React, { Component } from 'react';
import './App.css';
import contacts from './guests.json';
import searchIcon from './zoom.png' 

import List from './List.js';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      guests: contacts,
      search: ""
    }
  }
  
  updateSearch(e){
    this.setState({
      search: e.target.value
    });
  }
  
  render() {
    const { guests, search } = this.state;
    
    const filteredGuests = guests
    .filter(guests => {
      return guests.name.toLowerCase().indexOf(search.toLowerCase()) >= 0
    })
    .map( 
      guest => (
        <List guest={guest} key={guest.index} onChange={this.filterGuests}/>
      )
    )

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
                <button className="search" onClick={this.updateSearch}>
                  <img src={searchIcon} alt={"Поиск"}/>
                </button>
              </div>
            </div>
          </header>
          <div className="search-box">
            <input 
              placeholder="Введите имя гостя для поиска" 
              className="search-input"
              type="text" 
              onChange={this.updateSearch.bind(this)} 
              value={this.state.search} />
          </div>
          <ul>
          {filteredGuests.length ? filteredGuests : <p>Гостя с таким именем нет</p>}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
