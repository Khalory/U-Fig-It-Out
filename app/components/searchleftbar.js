import React from 'react';

export default class SearchLeftBar extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-2 fig-categories">
          <ul className="nav nav-pills nav-stacked">
            <li role="presentation"><b>BOOKS</b></li>
            <li role="presentation" className="active">
              <a href="#">Textbooks</a>
            </li>
            <li role="presentation">
              <a href="#">Non-textbooks</a>
            </li>
            <li role="presentation"><b>CARS</b></li>
            <li role="presentation">
              <a href="#">Vehicles</a>
            </li>
            <li role="presentation">
              <a href="#">Automotive Accessories</a>
            </li>
            <li role="presentation"><b>CLOTHING</b></li>
            <li role="presentation">
              <a href="#">{`Men's`}</a>
            </li>
            <li role="presentation">
              <a href="#">{`Women's`}</a>
            </li>
            <li role="presentation"><b>HOUSEHOLD</b></li>
            <li role="presentation">
              <a href="#">Furniture</a>
            </li>
            <li role="presentation">
              <a href="#">Refrigerators and Appliances</a>
            </li>
            <li role="presentation">
              <a href="#">Other Items</a>
            </li>
            <li role="presentation"><b>FIGS</b></li>
            <li role="presentation"><b>ELECTRONICS</b></li>
            <li role="presentation">
              <a href="#">iClickers</a>
            </li>
            <li role="presentation">
              <a href="#">Cell Phones</a>
            </li>
            <li role="presentation">
              <a href="#">Other Electronic Items</a>
            </li>
            <li role="presentation"><b>COMPUTER</b></li>
            <li role="presentation">
              <a href="#">Laptops</a>
            </li>
            <li role="presentation">
              <a href="#">Desktops</a>
            </li>
            <li role="presentation">
              <a href="#">Computing Accessories</a>
            </li>
            <li role="presentation"><b>VIDEO GAMES</b></li>
            <li role="presentation">
              <a href="#">Consoles</a>
            </li>
            <li role="presentation">
              <a href="#">Games</a>
            </li>
            <li role="presentation">
              <a href="#">Gaming Accessories</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
