import { Component } from 'react'
import { Heading } from './heading'
import TransactionHistoryItem from './transactionItem'
import { ItransactionHistoryProps } from './interfaces'
import { transactionItem } from './interfaces'

export class TransactionHistory extends Component<ItransactionHistoryProps> {

  getLatestTransaction(transactionList: transactionItem[]) {
    return (transactionList.length <= 3) ? [...transactionList] : [...transactionList.slice(-3)];
  }

  render() {
    const { transactionList } = this.props;
    let latestTransaction = this.getLatestTransaction(transactionList);
    return (
      <div className='transactionHistory'>
        <Heading headingtext='History'></Heading>
        {
          latestTransaction.map((transactionItem) => {
            return <TransactionHistoryItem {...transactionItem}></TransactionHistoryItem>
          })
        }
      </div>
    )
  }
}
