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
      console.log(res.data)
    })
  }

  deleteProduct = (id) => {
    axios.delete(`/api/product/${id}`).then( res => {
      this.setState({list: res.data})
    })
    window.location.reload();
  }


  render() {
    return (
      <div className="App">
          <Header />
          <Dashboard list={this.state.list} deleteProduct={this.deleteProduct}/>
          <Form />
      </div>
    );
  }
}

export default App;
