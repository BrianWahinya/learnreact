import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        address: {
            street: 'K street',
            city: 'Nairobi'
        },
        tags: ['tag5', 'tag6', 'tag7']
    }
    render() { 
        return (
            // You can use React.Fragent
            <>
                <img src={this.state.imageUrl} alt='react'/>
                <h1>First Component</h1>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className='btn btn-success btn-sm'>Increment</button>
                {this.renderTags()}
            </>
        );
    }

    renderTags() {
        if(this.state.tags.length === 0) return <p>No tags available</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return (count === 0)? 'Zero': count;
    }
}
 
export default Counter;