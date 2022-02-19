import React, {Component} from "react";
import Counter from './counter';

class Counters extends React.Component{
  render(){
    const {products, resetValues, deleteProduct, countProductAmount} = this.props;
    return (
      <>
        <button id='btnReset' onClick={resetValues} className='btn btn-primary btn-sm m-2 btnReset'>Reset</button>
        {products.map(prod => 
          <Counter
            key={prod.id} 
            product={prod}
            deleteProduct={deleteProduct} 
            countProductAmount={countProductAmount}
          />
        )}
      </>
    )
  }

}

export default Counters;