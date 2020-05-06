import React, { Component } from 'react'
import { linkData } from './linkData';

const ProductContext = React.createContext();
//Provider
// Consumer
class ProductProvider extends Component {
    state = {
        sidebarOpen:false,
        cartOpen:false,
        cartItems: 123,
        links: linkData
    }
    // Handle Sidebar
    handleSidebar = () => {
        this.setState({sidebarOpen: !this.state.sidebarOpen}) 
    }
    // Handle Cart
    handleCart = () => {
        this.setState({cartOpen: !this.state.cartOpen}) 
    }
    // Close Cart
    closeleCart = () => {
        this.setState({cartOpen: false}) 
    }
    // Open Cart
    openleCart = () => {
        this.setState({cartOpen: true}) 
    }

    render() {
        return(
            <ProductContext.Provider 
                value={{
                    ...this.state,
                    handleSidebar: this.handleSidebar,
                    handleCart: this.handleCart,
                    closeCart:this.closeCart, 
                    openCart: this.openCart
                    }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };