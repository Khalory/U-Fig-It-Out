import React from 'react';

export default class AcceptablePayments extends React.Component {
  render() {
    var checked = [false, false, false, false, false, false, false]
    if (typeof this.props.checked !== 'undefined' && this.props.checked) {
      checked = this.props.checked
    }
    while (checked.length < 7) {
      checked.push(false)
    }
    return (
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <h4>Acceptable Payments</h4>
          <table className="table item-payments">
            <tbody>
              <tr>
                <td><input type="checkbox" disabled={this.props.disabled} checked={checked[0]}>Venmo</input></td>
                <td><input type="checkbox" disabled={this.props.disabled} checked={checked[1]}>Paypal</input></td>
                <td><input type="checkbox" disabled={this.props.disabled} checked={checked[2]}>Figs</input></td>
                <td><input type="checkbox" disabled={this.props.disabled} checked={checked[3]}>Cash</input></td>
              </tr>
              <tr>
                <td><input type="checkbox" disabled={this.props.disabled} checked={checked[4]}>Check</input></td>
                <td><input type="checkbox" disabled={this.props.disabled} checked={checked[5]}>Barter</input></td>
                <td><input type="checkbox" disabled={this.props.disabled} checked={checked[6]}>Bank Transfer</input></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
