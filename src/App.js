import React, { Component } from 'react';
import FlatList from './components/FlatList';
import flats from './flat.js'



class App extends Component{
  render(){
    // flats.map(flat=>console.log(flat.name))
    return (
      <div>
        <FlatList flats={flats} />
      </div>
    );
  }
}

export default App;
