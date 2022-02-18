import React, { Component } from 'react';

class Counter extends React.Component {
    /*
    // Use a constructor or fat-arrow function
    constructor(){
        super();
        console.log('This', this);
    }
    */

    state = {
        value: this.props.value,
        productStyle: {
            width: 'fit-content'
        }
        // countName: method - getBadgeClasses
    }

    render() {
        return (
            // You can use React.Fragment
            <div>
                {this.renderTags()}
            </div>
        );
    }

    renderTags() {
        console.log('props', this.props)
        const {counterId, counterName} = this.props;        
        return <>
            {<span className="position-relative m-3" style={this.state.productStyle}>
                <span style={{'paddingRight':8}}>{counterName}</span>
                <span className={this.getBadgeClasses()}>{this.state.valueName}</span>
            </span>}
            {<button id={counterId} onClick={() => this.countProductAmount('add', counterId)} className='badge m-2 btnAdd bg-primary'>+</button> /*Add button*/}
            {<button id={counterId} onClick={() => this.countProductAmount('minus', counterId)} className='badge m-2 btnSubtract bg-danger'>-</button> /*Subtract button*/}
        </>;
    }

    getBadgeClasses() {
        let classes = "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-";
        // classes += (this.state.count === 0) ? 'warning' : 'primary';
        if(this.state.value === 0){
            classes += 'warning';
            this.state.valueName = 'Zero';
        }else{
            classes += 'success';
            this.state.valueName = this.state.value;
        }
        // console.log(this.state);
        return classes;
    }

    // formatCount() {
    //     const { count } = this.state;
    //     return (count === 0) ? 'Zero' : count;
    // }

    // use fat-arrow function instead of using constructor
    countProductAmount = (instruction) => {
        let {value} = this.state;
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
        this.setState({ value: value })
        // console.log('current state', this.state)       
    }
}

export default Counter;