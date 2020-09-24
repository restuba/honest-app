import React, { Component, createContext, Children } from 'react';
import API from '../service/Service';

export const RootContext = createContext();

const Provider = RootContext.Provider;
const GlobalProvider = (Children) => {
  return(
    class ParentComponent extends Component{
      state = {
        wishlist: 0,
        maxMenu: false,
        cart: 2,
        categories: [],
        products: []
      }

      componentDidMount(){
        this.getProduct();
      }

      getProduct = () => {
        API.getProducts().then(result => {
          this.setState({
            products: result
          }, console.log('panggil API'))
        })
      }

      getProductID = idProduct => {
        const tempProduct = [...this.state.products];
        const product = tempProduct.find(product=> product.id == idProduct);
        return product;
      }
    
      dispatch = (action, param) => {
        if(action.type === 'HANDLE_MENU'){
          return this.setState({
            maxMenu: !this.state.maxMenu
          })
        } 
      }

      render(){
        return(
          <Provider value = {
            {
              state: this.state,
              dispatch: this.dispatch,
              getProductID: this.getProductID
            }
          }>
            <Children {...this.props} />
          </Provider>
        )
      }
    }
  )
}
export default GlobalProvider;

const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
  return(
    class ParentConsumer extends Component{
      render(){
        return (
          <Consumer>
            {
              value => {
                return(
                  <Children {...this.props} {...value} />
                )
              }
            }
          </Consumer>
        )
      }
    }
  );
}
