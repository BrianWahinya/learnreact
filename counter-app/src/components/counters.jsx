import React, {Component} from "react";
import Counter from './counter';

class Counters extends React.Component{
  state = {
    products: [
      {id:'Phone', name:'Phone', value: 0},
      {id:'Torch', name:'Torch', value: 0},
      {id:'Laptop', name:'Laptop', value: 0},
      {id:'Mouse', name:'Mouse', value: 0},
      {id:'Screen', name:'Screen', value: 0}
    ]
  }

  render(){
    return (
      <>
        {this.state.products.map(prod => <Counter key={prod.id} counterId={prod.id} counterName={prod.name} />)}
      </>
    )
  }


}

export default Counters;