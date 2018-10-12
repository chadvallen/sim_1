import React, { Component } from 'react'
import axios from 'axios';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            imageUrlInput: '',
            nameInput: '',
            priceInput: 0
        }
    }

    createProduct = () => {
        let newProduct = {
            name: this.state.nameInput,
            price: this.state.priceInput,
            img: this.state.imageUrlInput
        }
        axios.post('/api/product', newProduct).then(results => {
            this.setState({createProduct: results.data})
        }).catch(err=> {
            console.error('Error on createPRoduct -->', err)
        })
        window.location.reload();
    }

    handleImageUrlInput(val) {
        this.setState({imageUrlInput: val})
    }

    handleNameInput(val) {
        this.setState({nameInput: val})
    }

    handlePriceInput(val) {
        this.setState({priceInput: val})
    }

    resetValues = () => {
        this.setState({imageUrlInput: '', nameInput: '', priceInput: 0})
    }

    render() {
        return (
            <div>
                
                Name: <input onChange={e => this.handleNameInput(e.target.value)}></input><br></br>
                Price: <input onChange={e => this.handlePriceInput(e.target.value)}></input><br></br>
                ImageURL: <input onChange={e => this.handleImageUrlInput(e.target.value)}></input>
                <button onClick={() => this.resetValues}>Cancel</button>
                <button onClick={this.createProduct}>Add to Inventory</button>


            </div>
        )
    }
}

export default Form;