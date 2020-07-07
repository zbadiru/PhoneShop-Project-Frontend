import React, { Component } from 'react'
import Product from './components/Product'


const ProductContext = React.createContext()
// Provider
// Consumer

class ProductProvider extends Component { 
    state = {
        products: [],
        detailsProduct: []
    } 

    getItem = (id) => this.state.products.find(item => item.id === id)
    

    handleDetails = (id) => {
        const product = this.getItem(id)
        this.setState(() =>{
            return {detailsProduct: product}
        })
    }
    
    addToCart = (id) => {
        console.log(`hello from add to cart the is ${id}`);
    }

    componentDidMount() {
        fetch("http://localhost:3001/phones")
        .then((data) => data.json())
        .then((products) => this.setState({
            products: products,
            detailsProduct: products[0]
        }))
        
        
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}