import React, {Component} from "react";
import Counter from './counter';

class Counters extends React.Component{
  render(){
    return (
      <>
        <button id='btnReset' onClick={this.props.resetValues} className='btn btn-primary btn-sm m-2 btnReset'>Reset</button>
        {this.props.products.map(prod => 
          <Counter
            key={prod.id} 
            product={prod}
            deleteProduct={this.props.deleteProduct} 
            countProductAmount={this.props.countProductAmount}
          />
        )}
      </>
    )
  }

}

export default Counters;