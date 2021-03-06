import React from 'react';
import './App.css';
import List from './components/list'


export default class App extends React.Component {
  // list out the items

  constructor(props) {
    super(props)

    this.state = {
      term: '',
      items: [],
    }
  }

  // Event listener method that will grab the user input and then change the state of the term to that value;
  onChange = (event) => {
    this.setState({ term: event.target.value })
  }

  // Event listener method that will store the value to the List component through the items prop down below;
  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    })
  }

  render() {
    return (
      <div>
        <div className="header">
          <div clssName="wrapper">
            <p className="title">To-Do List</p>
          </div>
        </div>

        <div className="app">
          <div className="app-wrapper"></div>
          <form className="App" onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} placeholder="Type here to add a task" type="text" id="box" />
            < br />
            <List items={this.state.items} />
          </form>
          <br />
        </div>
      </div>
    );
  }
}

