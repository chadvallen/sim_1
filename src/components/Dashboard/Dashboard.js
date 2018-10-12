import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    deleteProduct = (id) => {
        axios.delete(`/api/product/${id}`)
        window.location.reload();
      }
    

    render() {
        let newList = this.props.list.map(item => {
            return (
                <div className="child">
                    <Product name={item.name} price={item.price} img={item.img} />
                    <button onClick={() => this.deleteProduct(item.id)}>Delete</button>
                </div>
            )
        })
        return (
            <div>
                {newList}
            </div>
            
        )
    }

}

export default Dashboard;