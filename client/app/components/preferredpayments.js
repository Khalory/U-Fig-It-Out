import React from 'react';
import {getPreferredPayments} from '../server'

export default class PreferredPayments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      preferred_payments: [],
      checked_payments: this.props.preferred_payments
    }
  }

  componentDidMount() {
    getPreferredPayments((pps) => {
      pps.forEach((pp) => {
        pp.checked = this.state.checked_payments.indexOf(pp._id) > -1
      })
      this.setState({preferred_payments: pps})
    })
  }

  componentDidUpdate() {
    if (this.state.checked_payments === this.props.preferred_payments)
      return

    this.setState({checked_payments: this.props.preferred_payments})
    getPreferredPayments((pps) => {
      pps.forEach((pp) => {
        pp.checked = this.state.checked_payments.indexOf(pp._id) > -1
      })
      this.setState({preferred_payments: pps})
    })
  }

  click(e) {
    e.preventDefault()
    var value = e.target.value
    var pps = this.state.preferred_payments
    pps[value].checked = !pps[value].checked
    this.setState({preferred_payments: pps})
    this.props.onUpdate(pps.map((pp) => { return pp.checked ? pp._id : null }).filter((pp) => { return pp != null }))
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
          paymentRow.push(<td key={(i*4 + j + 1) * (pp.checked ? 1 : -1)}><input value={i*4 + j} type="checkbox" disabled={this.props.disabled} checked={pp.checked} onChange={this.click.bind(this)}/>{pp.name}</td>)
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
