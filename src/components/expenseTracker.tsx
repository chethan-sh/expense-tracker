import { Component } from "react";
import { TransactionHistory } from "./transactionHistory";
import { InputTransactionDetailes } from "./inputTransaction";
import { transactionArr } from "../transactionArr";
import { ITransactionItem } from "./interfaces";
import "../App.css";
import { ITrackerData } from "./interfaces";
import { IExpenseTrackerState } from "./interfaces";
import TrackerData from "./trackerData";
const amountType = {
  credit: "credit"
};

export class ExpenseTracker extends Component<{}, IExpenseTrackerState> {
  constructor(props: {}) {
    super(props);
    this.addTransactionDetails = this.addTransactionDetails.bind(this);
    this.calculateIncomeExpense = this.calculateIncomeExpense.bind(this);
    this.state = {
      balance: 0,
      income: 0,
      expense: 0,
      transactionList: []
    };
  }

  addTransactionDetails({
    transactionType,
    transactionAmount,
    transactionName
  }: ITransactionItem) {
    transactionArr.push({
      transactionName,
      transactionType,
      transactionAmount
    });
    alert("added transaction sucessfully");
    this.calculateIncomeExpense(transactionType, transactionAmount);
  }

  calculateIncomeExpense(transactionType: string, transactionAmount: number) {
    let { income, expense, balance }: ITrackerData = this.state;
    if (transactionType === amountType.credit) {
      income = income + transactionAmount;
    } else {
      expense = expense + transactionAmount;
    }
    balance = income - expense;
    this.setState({
      balance: balance,
      income: income,
      expense: expense,
      transactionList: [...transactionArr]
    });
  }

  render() {
    const { balance, income, expense, transactionList } = this.state;
    return (
      <>
        <div className="expenseTracker">
          <h3>Expense Tracker</h3>
          <TrackerData balance={balance} income={income} expense={expense} />
          <div className="change">
            <InputTransactionDetailes
              balance={balance}
              addTransactionDetails={this.addTransactionDetails}
            />
            <TransactionHistory
              transactionList={transactionList}
            ></TransactionHistory>
          </div>
        </div>
      </>
    );
  }
}
