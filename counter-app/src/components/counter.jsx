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
        tags: ['Phone', 'Torch', 'Laptop', 'Mouse', 'Screen'],
        tagsObj:{}
        // countName: method - getBadgeClasses
        // tagObj: object containing tags and their respective count
    }

    render() {
        return (
            // You can use React.Fragment
            <>
                {/* <img src={this.state.imageUrl} alt='react'/> */}
                {/* <h1>First Component</h1> */}
                <span className={this.getBadgeClasses()}>{this.state.countName}</span>
                {/* <button onClick={() => this.countIncrement({id:2})} className='btn btn-success btn-sm'>Increment</button> */}
                {this.renderTags()}
            </>
        );
    }

    renderTags() {
        const {tags, tagsObj} = this.state;
        if (tags.length === 0) return <p>No tags available</p>;
        
        return <ul>
            { tags.map(tag => {
                tagsObj[tag] = tagsObj[tag] || 0; 
                return <li key={tag}>
                    <span className='badge bg-dark'>{tagsObj[tag]}</span>
                    {tag /*Tag Label */}
                    {<button id={tag} onClick={() => this.countProducts('add', tag)} className='badge m-2 btnAdd bg-primary'>+</button> /*Add button*/}
                    {<button id={tag} onClick={() => this.countProducts('minus', tag)} className='badge m-2 btnSubtract bg-danger'>-</button> /*Subtract button*/}
                </li>
            })}
        </ul>;
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
        console.log(this.state);
        return classes;
    }

    // formatCount() {
    //     const { count } = this.state;
    //     return (count === 0) ? 'Zero' : count;
    // }

    // use fat-arrow function instead of using constructor
    countProducts = (instruction, productId) => {
        let {count, tagsObj} = this.state;
        // console.log('Before tagsObj', tagsObj)
        let productAmount = tagsObj[productId];
        switch(instruction){
            case 'add':
                count++;
                productAmount++;         
                break;
            case 'minus':
                if(count !== 0 && productAmount !== 0){
                    count--;
                    productAmount--;
                }                
                break;                
        }
        tagsObj[productId] = productAmount;
        // console.log('After tagsObj', tagsObj);
        this.setState({
            count: count,
            tagsObj: tagsObj
        })
        // console.log('current state', this.state)       
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