import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor() {
        super();
    }




    render() {
        let newList = this.props.list.map(item => {
            return (
                <div>
                    <Product name={item.name} price={item.price} img={item.img}/>
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