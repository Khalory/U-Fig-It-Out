import React from 'react';
import {getPreferredPayments} from '../server'

export default class PreferredPayments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      preferred_payments: []
    }
  }

  componentDidMount() {
    getPreferredPayments((pps) => {
      pps.forEach((pp) => {
        pp.checked = this.props.preferred_payments.indexOf(pp._id) > -1
      })
      this.setState({preferred_payments: pps})
    })
  }

  componentDidUpdate() {
    getPreferredPayments((pps) => {
      pps.forEach((pp) => {
        pp.checked = this.props.preferred_payments.indexOf(pp._id) > -1
      })
      this.setState({preferred_payments: pps})
    })
  }

  render() {
    var payments = []
    var len = this.state.preferred_payments.length
    var numRows = Math.ceil(len/4)
    for (var i = 0; i < numRows; i++) {
      var paymentRow = []

      for (var j = 0; j < 4; j++) {
        if (i*4 + j < len) {
          var pp = this.state.preferred_payments[i*4 + j]
          paymentRow.push(<td key={i*4 + j}><input type="checkbox" disabled={this.props.disabled} checked={pp.checked} />{pp.name}</td>)
        }
        else
          paymentRow.push(<td key={i*4 + j}></td>)
      }
      payments.push(<tr key={i}>{paymentRow}</tr>)
    }

    return (
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <h4>Acceptable Payments</h4>
          <table className="table item-payments">
            <tbody>
              {payments}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
