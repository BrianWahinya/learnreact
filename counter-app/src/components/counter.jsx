import React, { Component } from 'react';

class Counter extends React.Component {
    /*
    // Use a constructor or fat-arrow function
    constructor(){
        super();
        console.log('This', this);
        this.countIncrement = this.countIncrement.bind(this);
    }
    */

    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        address: {
            street: 'K street',
            city: 'Nairobi'
        },
        tags: ['Phone', 'Torch', 'Laptop', 'Mouse', 'Screen']
        // countName: method - getBadgeClasses
    }

    render() {
        return (
            // You can use React.Fragment
            <>
                {/* <img src={this.state.imageUrl} alt='react'/> */}
                {/* <h1>First Component</h1> */}
                <span className={this.getBadgeClasses()}>{this.state.countName}</span>
                <button onClick={() => this.countIncrement({id:2})} className='btn btn-success btn-sm'>Increment</button>
                {this.renderTags()}
            </>
        );
    }

    renderTags() {
        const {tags} = this.state;
        if (tags.length === 0) return <p>No tags available</p>;
        return <ul>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        // classes += (this.state.count === 0) ? 'warning' : 'primary';
        if(this.state.count === 0){
            classes += 'warning';
            this.state.countName = 'Zero';
        }else{
            classes += 'primary';
            this.state.countName = this.state.count;
        }
        return classes;
    }

    // formatCount() {
    //     const { count } = this.state;
    //     return (count === 0) ? 'Zero' : count;
    // }

    // use fat-arrow function instead of using constructor
    countIncrement = productObj => {
        // this.state.count++;
        console.log("product object", productObj);
        this.state.count++;
        this.setState({ count: this.state.count });
    }

    // pass arguments to countIncrement
    /*
    passArg = () => {
        this.countIncrement({id:1});
        console.log('count passArg', this.state.count);
    }
    */
}

export default Counter;