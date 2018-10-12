import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let newList = this.props.list.map(item => {
            return (
                <div>
                    <Product name={item.name} price={item.price} img={item.img} />
                    <button onClick={() => this.props.deleteProduct(item.id)}>Delete</button>
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