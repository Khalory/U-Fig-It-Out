import React from 'react'

export default class ListingPage extends React.Component {
  render() {
    var imgs = this.props.images ? this.props.images : []
    var primary = imgs.length > 0 ? <img key={0} className="img-thumbnail" src={imgs[0]} width="100%" /> : ''
    var secondary = imgs.length > 1 ? imgs.splice(1, 2).map((img, i) => {
                  return <img key={i} className="img-thumbnail" src={img} width="45%" />
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
                <button type="button" className="btn btn-default navbar-btn">
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
