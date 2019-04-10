import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
        guestsFilter: ""
    }
  }
  
  searchGuest = (e) => {
    this.setState(
        state => ({
          guestsFilter: e.value
        })
    );
  }
  
  render() {
    return (
      <input 
          placeholder="Введите имя гостя для поиска" 
          className="search-input"
          type="text" 
          id="filter" 
          value={this.state.guestsFilter} 
          onChange={this.searchGuest}/>
    )
  }
}

export default Search