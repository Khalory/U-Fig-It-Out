import React from 'react'

export default class ListingPage extends React.Component {
  render() {
    return (
      <div className="col-md-5">
        <div className="row item-images">
          <div className="col-md-8">
            <img className="img-thumbnail" src={this.props.images[0]} width="100%" />
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
                {this.props.images.splice(1, 2).map((img) => {
                  return <img className="img-thumbnail" src={img} width="45%" />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }
