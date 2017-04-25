import React from 'react';
import AcceptablePayments from './acceptablePayments'
import Navbar from './navbar'
import {storeListing} from '../server'
import {readFullCollection} from '../database'



export default class newlisting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description:'',
      categories:[],
      preferred_payments:[],
      post_time: null,
      update_time: null,
      active: null,
      price: null,
      pictures:''
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }

  /**
   * Called when the user clicks the 'post' button.
   * Triggers the `onPost` prop if the post isn't empty, and clears
   * the component.
   */
  handlePost(e) {
    e.preventDefault();
    // Prevent the event from "bubbling" up the DOM tree.
    var title = this.state.title.trim();
    var description = this.state.description.trim;
    var categories = this.state.categories;
    var preferred_payments = this.state.preferred_payments;
    var price = this.state.price;

    storeListing(this.props.location.query.id,title,description,categories,preferred_payments,price, () =>
      console.log(readFullCollection('item_listings')))

      this.setState({
      title: '',
      description:'',
      categories:[],
      preferred_payments:[],
      post_time: null,
      update_time: null,
      active: null,
      price: null,
      pictures:''});


    }


  /**
   * Called when the user types a character into the status update box.
   * @param e An Event object.
   */
   handleTextChange(event) {
    //  name = event.target.name;
    event.preventDefault()

    this.setState({name: event.target.value});
  }

  handleCheckChange(event){
    var  arr = this.state.categories
    arr.push(event.target.value)
    this.setState({ categories: arr })
  }

  render() {
    return (
      <div>
        <Navbar user={this.props.location.query.id}/>
        <div className="container">
          <div className="row center nlBody">
            <div className = "col-md-2">
            </div>
            <div className = "col-md-8">
            <h1>New Listing</h1>
            <p>This page is to help you create a new listing to sell your items!</p>
          <div className="form-group">
            <h2 className="nlh2">Name of Item:</h2>
            <input type="text" className="form-control" name = 'title' value ={this.state.value}  onChange={this.handleTextChange} />
          <h2 className="nlh2">Price:   <input type = "text" title = 'price' value ={this.state.value}  onChange={this.handleTextChange}  /></h2>
          <h2 className="nlh2">Check all that apply:</h2>

          <div className ="checkbox-inline">
            <label><input type="checkbox" value={1} name='categories' onChange={this.handleCheckChange} />Book</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value={2} name='categories' onChange={this.handleCheckChange} />Textbook</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value ={3} name='categories' onChange={this.handleCheckChange} /> Non-Textbook</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value={4} name='categories' onChange={this.handleCheckChange} />CARS</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value ={5} name='categories' onChange={this.handleCheckChange} />Vehicles</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox"value ={6} name='categories' onChange={this.handleCheckChange} />Automotive Acessories</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value={7} name='categories' onChange={this.handleCheckChange} />CLOTHING</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value ={8} name='categories' onChange={this.handleCheckChange} />Men's Clothing</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value ={9} name='categories' onChange={this.handleCheckChange} />Women's Clothing</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value ={10} name='categories' onChange={this.handleCheckChange} /> HOUSEHOLD </label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value ={11} name='categories' onChange={this.handleCheckChange} />Furniture</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value ={12} name='categories' onChange={this.handleCheckChange} />Refrigerators and Appliances</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value ={13} name='categories' onChange={this.handleCheckChange} />Other Items</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value ={14} name='categories' onChange={this.handleCheckChange} />Figs</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value ={15} name='categories' onChange={this.handleCheckChange} />ELECTRONICS</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value ={16} name='categories' onChange={this.handleCheckChange} />IClickers</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value ={17} name='categories' onChange={this.handleCheckChange} />Cell Phones</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value ={3} name='categories' onChange={this.handleCheckChange} />Television</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value ={3} name='categories' onChange={this.handleCheckChange} />Laptops</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value ={3} name='categories' onChange={this.handleCheckChange} />Desktops</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value ={3} name='categories' onChange={this.handleCheckChange} />Video Games</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value ={3} name='categories' onChange={this.handleCheckChange} />Game Consoles</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value ={3} name='categories' onChange={this.handleCheckChange} />Gaming Accessories</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value ={18} name='categories' onChange={this.handleCheckChange} />Other Electronic Items</label>
          </div>
            <h2 className="nlh2"> Description:</h2>
            <textarea className="form-control" rows="5" name = 'description' value ={this.state.value}  onChange={this.handleTextChange}></textarea>
        <AcceptablePayments disabled={false} checked/>
          File Path:
          <input type = "text" />
          <button type="button" className="btn btn-secondary" >Add Photos!</button>
          <br/>
          <button type="button" className="btn btn-secondary" onClick={(e) => this.handlePost(e)} >Create Listing!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
  }
}
