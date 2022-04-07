import React, { Component } from 'react'
import {transactionItem} from './interfaces'

export default class TransactionHistoryItem extends Component<transactionItem,{}> {
  render() {
      const {transactionName,transactionAmount,transactionType}=this.props;
    return (
      <div className={(transactionType==='credit')?"transactionCredit":"transactionDebit"}>
          <p>{transactionName}</p>
          <p>{transactionAmount}</p>
      </div>
    )
  }
}
