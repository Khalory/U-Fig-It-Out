import React from 'react'

export default class ListingImages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: this.props.images,
      shift: 0
    }
  }

  componentDidUpdate() {
    if (this.state.images !== this.props.images) {
      this.setState({
        images: this.props.images,
        shift: 0
      })
    }
  }

  nextImage() {
    var images = this.state.images
    var lastImage = images[0]
    for (var i = 1; i < images.length; i++) {
      images[i-1] = images[i]
    }
    images[images.length-1] = lastImage
    this.setState({
      images: images,
      shift: this.state.shift + 1
    })
  }


  render() {
    var imgs = this.state.images ? this.state.images : []
    var shift = this.state.shift
    var primary = imgs.length > 0 ? <img key={0+shift} className="img-thumbnail" src={imgs[0]} width="100%" /> : ''
    var secondary = imgs.length > 1 ? imgs.slice(1, 3).map((img, i) => {
                  return <img key={i+shift} className="img-thumbnail" src={img} width="45%" />
                }) : ''

    return (
      <div className="col-md-5">
        <div className="row item-images">
          <div className="col-md-8">
            {primary}
          </div>
          <div className="col-md-4">
            <div className="row item-subimage-chevron">
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-default navbar-btn" onClick={this.nextImage.bind(this)}>
                  <span className="glyphicon glyphicon-chevron-right"></span>
                </button>
              </div>
            </div>
            <div className="row item-subimage">
              <div>
                {secondary}
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }
