import { Component } from "react";
import TransactionHistoryItem from "./transactionItem";
import { ITransactionHistoryProps } from "./interfaces";
import { ITransactionItem } from "./interfaces";
import { Heading } from "./heading";

export class TransactionHistory extends Component<ITransactionHistoryProps> {
  getLatestTransaction(transactionList: ITransactionItem[]) {
    return transactionList.length <= 3
      ? [...transactionList]
      : [...transactionList.slice(-3)];
  }

  render() {
    const { transactionList } = this.props;
    let latestTransaction = this.getLatestTransaction(transactionList);
    return (
      <div className="transactionHistory">
        <Heading headingtext="Transaction History" />
        {latestTransaction.map((transactionItem) => {
          return (
            <TransactionHistoryItem
              {...transactionItem}
            ></TransactionHistoryItem>
          );
        })}
      </div>
    );
  }
}
