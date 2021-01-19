import './App.css';
import React from 'react';
import CardList from './components/collection.jsx';


class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      cards: [{name: '', colors: '', type: ''},{name:'', colors:'', type: ''}]
    }

   // this.componentDidMount = this.componentDidMount.bind(this)

  }

  render(){

  return (
    <div className="App">
      <header className="App-header">
      <CardList movies ={this.state.cards}/>
        </header>
    </div>
  )};

}

export default App;
