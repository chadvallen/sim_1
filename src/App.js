import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    }
  }

  componentDidMount() {
    axios.get('/api/inventory').then( res => {
      this.setState({list: res.data})
    })
  }



  render() {
    return (
      <div className="App">
          <Header />
          <Dashboard list={this.state.list} name={this.state.list.name} price={this.state.list.price} img={this.state.list.img}/>
          <Form createProduct={this.createProduct}/>
          


      </div>
    );
  }
}

export default App;
