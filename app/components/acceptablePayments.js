import React from 'react';

export default class AcceptablePayments extends React.Component {
  render() {
    var checked = this.props.checked
    if (checked === null) {
      checked = [false] * 7
    }
    else if (checked.length < 7) {
      checked = checked.concat([false] * checked.length)
    }
    return (
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <h4>Acceptable Payments</h4>
          <table className="table item-payments">
            <tbody>
              <tr>
                <td><input type="checkbox" disabled={this.props.disabled} checked={this.props.checked[0]}>Venmo</input></td>
                <td><input type="checkbox" disabled={this.props.disabled} checked={this.props.checked[1]}>Paypal</input></td>
                <td><input type="checkbox" disabled={this.props.disabled} checked={this.props.checked[2]}>Figs</input></td>
                <td><input type="checkbox" disabled={this.props.disabled} checked={this.props.checked[3]}>Cash</input></td>
              </tr>
              <tr>
                <td><input type="checkbox" disabled={this.props.disabled} checked={this.props.checked[4]}>Check</input></td>
                <td><input type="checkbox" disabled={this.props.disabled} checked={this.props.checked[5]}>Barter</input></td>
                <td><input type="checkbox" disabled={this.props.disabled} checked={this.props.checked[6]}>Bank Transfer</input></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
