import { Component } from 'react'
import { TransactionHistory } from './transactionHistory'
import { InputTransactionDetailes } from './inputTransaction'
import { transactionArr } from '../transactionArr'
import { transactionItem } from './interfaces'
import '../App.css';
import { IincomeExpense } from './interfaces'
import { IexpenseTrackerState } from './interfaces'
import TrackerData from './trackerData';
const amountType={
  type:'credit'
}

export class ExpenseTracker extends Component<{}, IexpenseTrackerState> {
  constructor(props: {}) {
    super(props)
    this.addTransactionDetails = this.addTransactionDetails.bind(this);
    this.calculateIncomeExpense = this.calculateIncomeExpense.bind(this);
    this.state = {
      balance: 0,
      income: 0,
      expense: 0,
      transactionList: [],
    }
  }

  addTransactionDetails({ transactionType, transactionAmount, transactionName }: transactionItem) {
    transactionArr.push(
      {
        transactionName,
        transactionType,
        transactionAmount,
      });
    alert('added transaction sucessfully');
    this.calculateIncomeExpense(transactionType, transactionAmount);
  }

  calculateIncomeExpense(transactionType: string, transactionAmount: number) {
    let { income, expense, balance }: IincomeExpense = this.state;
    if (transactionType === amountType.type) {
      income = income + transactionAmount;
    } else {
      expense = expense + transactionAmount;
    }
    balance = income - expense;
    this.setState({
      balance: balance,
      income: income,
      expense: expense,
      transactionList: [...transactionArr],
    })
  }

  render() {
    const { balance, income, expense, transactionList } = this.state;
    return (
      <div className='expenseTracker'>
        <h3>Expense Tracker</h3>
        <TrackerData balance={balance} income={income} expense={expense}/>
        <TransactionHistory transactionList={transactionList}></TransactionHistory>
        <InputTransactionDetailes balance={balance} addTransactionDetails={this.addTransactionDetails} />
      </div>
    )
  }
}
