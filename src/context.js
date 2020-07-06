import React, { Component } from 'react'
import Product from './components/Product'


const ProductContext = React.createContext()
// Provider
// Consumer

class ProductProvider extends Component {
    state = {
        products: []
    }

    addToCart = () => {
        console.log('hello from add to cart');
    }

    componentDidMount() {
        fetch("http://localhost:3001/phones")
        .then((data) => data.json())
        .then((products) => this.setState({ products }))
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}