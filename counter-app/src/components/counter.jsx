import React from 'react';

class Counter extends React.Component {
    /*
    // Use a constructor or fat-arrow function
    constructor(){
        super();
        console.log('This', this);
    }
    */

    // state = {
    //     value: this.props.value,
    //     productStyle: {
    //         width: 'fit-content'
    //     }
    //     // countName: method - getBadgeClasses
    // }

    render() {
        return (
            // You can use React.Fragment
            <div>
                {this.renderTags()}
            </div>
        );
    }

    renderTags() {
        // console.log('props', this.props)
        const {product, countProductAmount, deleteProduct} = this.props;
        const {id, name, value} = product;        
        return <>
            {<span className="position-relative m-2" style={{display: 'inline-block', width:70}}>
                <span>{name}</span>
                <span className={this.getBadgeClasses(value)}>{this.formatValueName(value)}</span>
            </span>}
            {<button id={id} onClick={() => countProductAmount('add', product)} className='badge m-2 btnAdd bg-primary'>+</button> /*Add button*/}
            {<button id={id} onClick={() => countProductAmount('minus', product)} className='badge m-2 btnSubtract bg-secondary'>-</button> /*Subtract button*/}
            {<button id={id} onClick={() => deleteProduct(id)} className='badge m-2 btnDelProd bg-danger'>Del</button> /*Delete button*/}
        </>;
    }

    getBadgeClasses(value) {
        let classes = "position-absolute top-0 start-90 translate-middle badge rounded-pill bg-";
        classes += (value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatValueName(value) {
        return (value === 0) ? 'Zero' : value;
    }    
}

export default Counter;