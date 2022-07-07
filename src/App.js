import groceriesData from './data/GroceryData';
import Navbar from './components/Navbar';
import GroceryList from './components/GroceryList';

import {Component} from 'react'
import './App.css';

class App extends Component {

  state = {
    groceriesData: groceriesData,
    item: '',
    brand: '',
    units: '',
    quantity: 0,
    isPurchased: false
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault ()

    //create a new grocery object
    const newGrocery = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,
      isPurchased: this.state.isPurchased
    }

    // set the new values in the state
    this.setState({
      groceriesData: [newGrocery, ...this.state.groceriesData],
      item: '',
      brand: '',
      units: '',
      quantity: 0,
      isPurchased: false
    })
  }

  handleRemove = (item, idx) => {
    console.log(item,idx);

    // this.state.groceriesData[idx].isPurchased = true
    const newArray = this.state.groceriesData.filter((i, index)=> index===idx)

    const filterArray = this.state.groceriesData.filter((i, index)=> index!==idx)

    // console.log(newArray);
    newArray[0].isPurchased = true
    console.log(this.state.groceriesData);
    this.setState({
      groceriesData: [...newArray, ...filterArray]
    })
  }

  render() { 
    return (
      <div className="App">
        <Navbar text='Grocery List'/>

        <form onSubmit={this.handleSubmit}> 
        <label htmlFor="item">Item Name</label>
        <input type="text" value={this.state.item} onChange={this.handleChange} id="item"></input> 

        <label htmlFor="brand">Brand Name</label>
        <input type="text" value={this.state.brand} onChange={this.handleChange} id="brand"></input>

        <label htmlFor="units">Unit</label>
        <input type="text" value={this.state.units} onChange={this.handleChange} id="units"></input>

        <label htmlFor="quantity">Quantity</label>
        <input type="number" value={this.state.quantity} onChange={this.handleChange} id="quantity"></input>  
        
        <input type="submit"/>

        
        </form>
        
        <GroceryList groceries={this.state.groceriesData} handleRemove={this.handleRemove}/>
      </div>
    );
    }
}

export default App;
