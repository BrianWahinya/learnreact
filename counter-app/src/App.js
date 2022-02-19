import React, {Component} from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends React.Component {

  state = {
    products: [
      {id:'Phone', name:'Phone', value: 0},
      {id:'Torch', name:'Torch', value: 0},
      {id:'Laptop', name:'Laptop', value: 0},
      {id:'Mouse', name:'Mouse', value: 0},
      {id:'Screen', name:'Screen', value: 0},
      {id:'Charger', name:'Charger', value: 0},
      {id:'Keyboard', name:'Keyboard', value: 0},
    ]
  }
  
  deleteProduct = productId => {
    const products = this.state.products.filter(prod => prod.id !== productId);
    this.setState({products})
  }

  resetValues = () => {
    const products = this.state.products.map(prod => { 
      prod.value = 0;
      return prod;
    });
    this.setState({products})
  }

  // use fat-arrow function instead of using constructor
  countProductAmount = (instruction, product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = {...product}
    switch(instruction){
        case 'add':
          products[index].value++;       
          break;
        case 'minus':
          if(products[index].value !== 0){
            products[index].value--;
          }                
          break;                
    }
    this.setState({products})
    // console.log('current state', this.state)       
  }

  countTotalProducts = () => {
    const productsWithoutZero = this.state.products.filter(prod => prod.value > 0);
    const allValues = productsWithoutZero.map(pwz => pwz.value);
    const total = allValues.reduce((sum, val) => sum += val, 0 )
    return total;
  }

  render() {
    return (
      <>
        <NavBar totalProducts={this.countTotalProducts}/>
        <main className='container'>
          <Counters 
            products = {this.state.products}
            deleteProduct={this.deleteProduct} 
            countProductAmount={this.countProductAmount}
            resetValues={this.resetValues}
          />
        </main>    
      </>
    );
  }
}

export default App;
