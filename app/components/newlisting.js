import React from 'react';
import AcceptablePayments from './acceptablePayments'
import {storeListing} from '../server'



export default class newlisting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description:"",
      categories:[],
      preferred_payments:[],
      post_time: null,
      update_time: null,
      active: null,
      price:null,
      pictures:""
    };
  }

  /**
   * Called when the user clicks the 'post' button.
   * Triggers the `onPost` prop if the post isn't empty, and clears
   * the component.
   */
  handlePost(e) {
    // Prevent the event from "bubbling" up the DOM tree.
    e.preventDefault();
    // Trim whitespace from beginning + end of entry.
    var statusUpdateText = this.state.value.trim();
    if (statusUpdateText !== "") {
      /* TODO: How do we send the post to the server + update the Feed? */

      this.setState({value: ""});
    }
  }

  /**
   * Called when the user types a character into the status update box.
   * @param e An Event object.
   */
  handleChange(e) {
    // Prevent the event from "bubbling" up the DOM tree.
    e.preventDefault();
    // e.target is the React Virtual DOM target of the input event -- the
    // <textarea> element. The textarea's `value` is the entire contents of
    // what the user has typed in so far.
    this.setState({value: e.target.value});
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row center">
            <div className = "col-md-2">
            </div>
            <div className = "col-md-8">
            <h1>New Listing</h1>
            <p>This page is to help you create a new listing to sell your items!</p>
          <div className="form-group">
            <h2>Name of Item:</h2>
            <input type="text" className="form-control" id="usr" value={this.state.value} onChange={(title) => this.handleChange(value)} />

          <h2>Price:   <input type = "text" price={this.state.value} onChange={(price) => this.handleChange(price)}  /></h2>
          <h2>Check all that apply:</h2>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Textbook</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Non-Textbook</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Vehicles</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Automotive Acessories</label>
          </div>

          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Men's Clothing</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Women's Clothing</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Furniture</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Refrigerators and Appliances</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Other Household items</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Figs</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />IClickers</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Cell Phones</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Television</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Laptops</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Desktops</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Video Games</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Game Consoles</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Gaming Accessories</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Other Electronic Items</label>
          </div>
            <h2> Description:</h2>
            <textarea className="form-control" rows="5" id="comment"value={this.state.value} onChange={(description) => this.handleChange(description)}></textarea>

        <AcceptablePayments disabled={false} checked value={this.state.value} onChange={(value) => this.handleChange(prefered_payments)}/>
          File Path:
          <input type = "text" />
          <button type="button" className="btn btn-secondary" value={this.state.value} onClick={(value) => this.handleChange(value)}>Add Photos!</button>
          <br/>
          <button type="button" className="btn btn-secondary" value={this.state.value} onClick={storeListing(title,description,categories,preferred_payments,post_time,last_updated,active,price,type,pictures)}>Create Listing!</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
  }
}
