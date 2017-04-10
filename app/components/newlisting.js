import React from 'react';
import AcceptablePayments from './acceptablePayments'
import Navbar from './navbar'
import ChatPopup from './chat-popup'


export default class newlisting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
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
      // Reset status update.
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
        <Navbar />
        <div className="container">
          <div className="row center nlBody">
            <div className = "col-md-2">
            </div>
            <div className = "col-md-8">
            <h1>New Listing</h1>
            <p>This page is to help you create a new listing to sell your items!</p>
          <div className="form-group">
            <h2 className="nlh2">Name of Item:</h2>
            <input type="text" className="form-control nlinput" id="usr" />

          <h2 className="nlh2">Price:   <input type = "text" /></h2>
          <h2 className="nlh2">Check all that apply:</h2>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Textbook</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />ICliker</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Clothing</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Furniture</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Video Games</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Television</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Housing</label>
          </div>
          <div className ="checkbox-inline">
            <label><input type="checkbox" value="" />Figs</label>
          </div>
            <h2 className="nlh2"> Description:</h2>
            <textarea className="form-control nlinput" rows="5" id="comment"value={this.state.value} onChange={(description) => this.handleChange(e)}></textarea>

        <AcceptablePayments disabled={false} checked />
          File Path:
          <input type = "text" />
          <button type="button" className="btn btn-secondary">Add Photos!</button>
          <br/>
          <button type="button" className="btn btn-secondary" onClick={(e) => this.storeListing(id,title,owner, description,categories,preferred_payments,post_time,last_updated,active,price,type,pictures)}>Create Listing!</button>
          </div>
        </div>
      </div>
    </div>
    <ChatPopup />
    </div>
    )
  }
}
