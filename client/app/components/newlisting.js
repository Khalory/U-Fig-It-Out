import React from 'react';
import PreferredPayments from './preferredpayments'
import Navbar from './navbar'
import {storeListing, getCategories} from '../server'

export default class newlisting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      categories: [],
      active_categories: [],
      preferred_payments: [],
      post_time: null,
      update_time: null,
      price: '',
      images: []
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleUncheck = this.handleUncheck.bind(this);
  }

  componentDidMount() {
    getCategories((categories) =>
      this.setState({categories: categories})
    )
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
    var description = this.state.description.trim();
    var categories = this.state.active_categories;
    var preferred_payments = this.state.preferred_payments;
    var price = this.state.price;
    var images = this.state.images

    storeListing(this.props.params.id, title, description, categories, preferred_payments, price, images, () => {
      this.setState({
        title: '',
        description: '',
        categories: [],
        active_categories: [],
        preferred_payments: [],
        post_time: null,
        update_time: null,
        price: '',
        images: []
      })
    })
  }

  /**
   * Called when the user types a character into the status update box.
   * @param e An Event object.
   */
   handleTextChange(event) {
    event.preventDefault()
    var name = event.target.name
    var val = event.target.value
    var ret = {}
    ret[name] = val
    this.setState(ret)
  }

  handleCheck(event) {
    var arr = this.state.active_categories
    arr.push(event.target.value)
    this.setState({ active_categories: arr })
  }

  handleUncheck(event) {
    var arr = this.state.active_categories
    arr = arr.filter((category) => {
      return category != event.target.value
    })
    this.setState({ active_categories: arr })
  }

  handleImageChange(e) {
    e.preventDefault();

    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onloadend = () => {
      var images = this.state.images
      images.push({file: file, name: reader.result})
      this.setState({images: images});
    }

    reader.readAsDataURL(file)
  }

  render() {
    var imagePreviews = this.state.images.map((image, i) => {
      return <img key={i} src={image.name} />
    })

    return (
      <div>
        <Navbar user={this.props.params.id} />
        <div className="container">
          <div className="row center nlBody">
            <div className = "col-md-2" />
            <div className = "col-md-8">
              <h1>New Listing</h1>
              <p>This page is to help you create a new listing to sell your items!</p>
              <div className="form-group">
                <h2 className="nlh2">Name of Item:</h2>
                <input type="text" className="form-control" name="title" onChange={this.handleTextChange} />
                <h2 className="nlh2">Price:   <input type="text" name="price" onChange={this.handleTextChange} /></h2>
                <h2 className="nlh2">Check all that apply:</h2>

                {this.state.categories.map((category) => {
                  var onCheckChange = this.handleCheck
                  if (this.state.active_categories.indexOf(category._id) > -1)
                    onCheckChange = this.handleUncheck
                  return(
                    <div key={category._id} className ="checkbox-inline">
                      <label><input type="checkbox" value={category._id} name="categories" onChange={onCheckChange} />{category.name}</label>
                    </div>
                  )
                })}
                <h2 className="nlh2"> Description:</h2>
                <textarea className="form-control" rows="5" name="description" onChange={this.handleTextChange}></textarea>
                <PreferredPayments disabled={false} preferred_payments={[]} />

                <input className="fileInput" type="file" onChange={(e)=>this.handleImageChange(e)} />

                <div className="imgPreview">
                  {imagePreviews}
                </div>
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
