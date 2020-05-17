import React, { Component } from 'react'
import { linkData } from './linkData';
import { socialData } from './socialData';
import { items } from './productData';
import { FaLessThanEqual } from 'react-icons/fa';

const ProductContext = React.createContext();
//Provider
// Consumer
class ProductProvider extends Component {
    state = { 
        sidebarOpen:false,
        cartOpen:false,
        links: linkData,
        socialIcons: socialData,
        cart:[],
        cartItems:33,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
        storeProducts:[],
        filteredProducts:[],
        featuredProducts:[],
        singleProduct:{},
        loading: true
    }

    componentDidMount(){
        //from contentful items
        this.setProducts(items);
    }

    setProducts = (products) => {
        let storeProducts = products.map(item => {
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            const product = {id, ...item.fields, image};
            return product;
        });
        // Featured Products
        let featuredProducts = storeProducts.filter( item => (item.featured === true));
        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            featuredProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false
        });
    }

    // Get Product from storage
    getStorageProduct = () => {
        return [];
    }

    // Get Cart from storage
    getStorageCart = () => {
        return [];
    }

    // Get Totals from storage
    getSTotals = () => {}

    // Add Totals from storage
    addSTotals = () => {}

    // Sync Storage
    syncStorage =() => {
        
    }

    // Add to cart
    addToCart = (id) => {
        console.log(`Add to cart ${id}`);
    }

    // Set Single Product
    setSingleProduct = (id) => {
        console.log(`Set Single Product ${id}`);
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
                    closeCart: this.closeCart, 
                    openCart: this.openCart,
                    addToCart: this.addToCart,
                    setSingleProduct: this.setSingleProduct
                    }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };