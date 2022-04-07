import React, { Component } from 'react'
import { Heading } from './heading'
import TransactionHistoryItem from './transactionItem'
import {transactionItem} from './interfaces'

interface ItransactionHistoryProps{
    transactionList:transactionItem[]
}

export class TransactionHistoryList extends React.Component<ItransactionHistoryProps> {
    constructor(props:ItransactionHistoryProps) {
        super(props)
    }

    getLatestTransaction(transactionList:transactionItem[]) {
        return (transactionList.length<=3)?[...transactionList]:[...transactionList.slice(-3)];
    }
    
  render() {
      const {transactionList} = this.props;
      let latestTransaction=this.getLatestTransaction(transactionList);
    return (
      <div className="transactionHistoryList">
          <Heading headingtext='History'></Heading>
          {
                latestTransaction.map((transactionItem)=>{
                return <TransactionHistoryItem {...transactionItem}></TransactionHistoryItem>
              })
          }
      </div>
    )
  }
}
