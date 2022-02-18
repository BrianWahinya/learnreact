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
        count: 0,
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
        const {key, counterId, counterName} = this.props;        
        return <>
            {<span className="position-relative m-3" style={this.state.productStyle}>
                <span style={{'padding-right':8}}>{counterName}</span>
                <span className={this.getBadgeClasses()}>{this.state.countName}</span>
            </span>}
            {<button id={key} onClick={() => this.countProductAmount('add', key)} className='badge m-2 btnAdd bg-primary'>+</button> /*Add button*/}
            {<button id={key} onClick={() => this.countProductAmount('minus', key)} className='badge m-2 btnSubtract bg-danger'>-</button> /*Subtract button*/}
        </>;
    }

    getBadgeClasses() {
        let classes = "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-";
        // classes += (this.state.count === 0) ? 'warning' : 'primary';
        if(this.state.count === 0){
            classes += 'warning';
            this.state.countName = 'Zero';
        }else{
            classes += 'success';
            this.state.countName = this.state.count;
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
        let {count} = this.state;
        switch(instruction){
            case 'add':
                count++;       
                break;
            case 'minus':
                if(count !== 0){
                    count--;
                }                
                break;                
        }
        this.setState({
            count: count
        })
        // console.log('current state', this.state)       
    }
}

export default Counter;