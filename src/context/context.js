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
        cartItems:0,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
        storeProducts:[],
        filteredProducts:[],
        featuredProducts:[],
        singleProduct:{},
        loading: true,
        search:'',
        price:0,
        min:0,
        max:0,
        company:'all',
        shipping:false
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
        
        // get max price
        let maxPrice = Math.max(...storeProducts.map(item => item.price));
         

        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            featuredProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false,
            price: maxPrice,
            max: maxPrice
        }, () => {this.addTotals()});
    }

    // Get Product from storage
    getStorageProduct = () => {
        return localStorage.getItem('singleProduct') ? 
            JSON.parse(localStorage.getItem('singleProduct')) : 
            {};
    }

    // Get Cart from storage
    getStorageCart = () => {
        let cart;
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
        } else {
            cart = [];
        }
        return cart;
    }

    // Get Totals from storage
    getTotals = () => {
        let subTotal = 0;
        let cartItems = 0;
        this.state.cart.forEach(item => {
            subTotal += item.total;
            cartItems += item.count;
        });
        subTotal = parseFloat(subTotal.toFixed(2));
        let tax = subTotal * 0.2;
        tax = parseFloat(tax.toFixed(2));
        let total = subTotal + tax;
        total = parseFloat(total.toFixed(2));
        return {
            cartItems,
            subTotal,
            tax,
            total
        };
    }

    // Add Totals from storage
    addTotals = () => {
        const totals = this.getTotals();
        this.setState({
            cartItems: totals.cartItems,
            cartSubTotal: totals.subTotal,
            cartTax: totals.tax,
            cartTotal: totals.total
        });
    }

    // Sync Storage
    syncStorage =() => {
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
    }

    // Add to cart
    addToCart = id => {
        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.storeProducts];
        let tempItem = tempCart.find(item => item.id === id);
        if(!tempItem){
            tempItem = tempProducts.find(item => item.id === id);
            let total = tempItem.price;
            let cartItem = {...tempItem, count:1, total};
            tempCart = [...tempCart,cartItem];
        } else {
            tempItem.count++;
            tempItem.total = tempItem.price * tempItem.count;
            tempItem.total = parseFloat(tempItem.total.toFixed(2));
        }
        this.setState(() => {
            return { cart: tempCart }
        }, () => {
            this.addTotals();
            this.syncStorage();
            this.openCart();
        });

    }

    // Set Single Product
    setSingleProduct = (id) => {
        let product = this.state.storeProducts.find(item => item.id === id);
        localStorage.setItem('singleProduct', JSON.stringify(product));
        this.setState({
            singleProduct: {...product},
            loading: false
        });
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
    closeCart = () => {
        this.setState({cartOpen: false}) 
    }

    // Open Cart
    openCart = () => {
        this.setState({cartOpen: true}) 
    }

    // cart funcionality
    // increment
    increment = id => {
        let tempCart = [...this.state.cart];
        const cartItem = tempCart.find(item => item.id === id);
        cartItem.count++;
        cartItem.total = cartItem.count * cartItem.price;
        cartItem.total = parseFloat(cartItem.total.toFixed(2));
        this.setState( ()=> {
            return {
                cart:[...tempCart]
            }
        }, ()=> {
            this.addTotals();
            this.syncStorage();
        });
    }

     // decrement
     decrement = id => {
        let tempCart = [...this.state.cart];
        const cartItem = tempCart.find(item => item.id === id);

        cartItem.count = cartItem.count - 1;
        if(cartItem.count === 0){
            this.removeItem(id);
        } else {
            cartItem.total = cartItem.count * cartItem.price;
            cartItem.total = parseFloat(cartItem.total.toFixed(2));
            this.setState( ()=> {
                return {
                    cart: [...tempCart]
                }
            }, ()=> {
                this.addTotals();
                this.syncStorage();
            });
        }
    }

    // Remove Item
    removeItem = (id) => {
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        this.setState( ()=> {
            return {
                cart:[...tempCart]
            }
        }, ()=> {
            this.addTotals();
            this.syncStorage();
        });
    }
    
    // Clear Cart
    clearCart = () => {
        this.setState( ()=> {
            return {
                cart:[]
            }
        }, ()=> {
            this.addTotals();
            this.syncStorage();
        });
    }

    // handle filtering
    handleChange = event => {
        const name = event.target.name;
        const value = event.target.type === "checkbox" ?
                                event.target.checked : 
                                event.target.value;
        this.setState({
            [name]: value

        }, this.sortData );
    }

    sortData = () => {
        console.log("sorting Data!!");
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
                    setSingleProduct: this.setSingleProduct,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                    handleChange: this.handleChange
                    }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };