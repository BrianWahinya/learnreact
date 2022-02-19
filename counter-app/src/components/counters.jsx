import React, {Component} from "react";
import Counter from './counter';

class Counters extends React.Component{
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

  render(){
    return (
      <>
        <button id='btnReset' onClick={() => this.resetValues()} className='btn btn-primary btn-sm m-2 btnReset'>Reset</button>
        {this.state.products.map(prod => 
          <Counter 
            key={prod.id}
            product={prod}
            deleteProduct={this.deleteProduct} 
            countProductAmount={this.countProductAmount}
          />
        )}
      </>
    )
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
    let value = products[index].value;
    switch(instruction){
        case 'add':
          value++;       
          break;
        case 'minus':
          if(value !== 0){
            value--;
          }                
          break;                
    }
    products[index].value = value
    this.setState({products})
    // console.log('current state', this.state)       
  }
}

export default Counters;