
import React, { Component } from 'react'
import { TransactionHistoryList } from './transactionHistory'
import { InputTransactionDetailes } from './inputTransaction'
import { transactionArr } from '../transactionArr'
import { IncomeExpenseInfo } from './incomeExpenseInfo'
import {transactionItem} from './interfaces'
import '../App.css';
import { IincomeExpense } from './interfaces'

interface IincomeExpenseState extends IincomeExpense{
  transactionList: transactionItem[],
} 

export class ExpenseTracker extends React.Component<{},IincomeExpenseState> {
  constructor(props:{}){
    super(props)
    this.addTransactionDetails=this.addTransactionDetails.bind(this);
    this.getTransactionDetails=this.getTransactionDetails.bind(this);
    this.vaildateAddingTransaction=this.vaildateAddingTransaction.bind(this);
    this.calculateIncomeExpense=this.calculateIncomeExpense.bind(this);
    this.state={
      balance:0,
      income:0,
      expense:0,
      transactionList:[],
    }
  }

  vaildateAddingTransaction({transactionType,transactionAmount,transactionName}:transactionItem){
    const balance=this.state.balance;
    if(transactionType ==='debit' && ((balance-transactionAmount)<0)) {
      alert('LOw Balance cant add data');
    } else {
      this.addTransactionDetails(transactionType,transactionAmount,transactionName);
    }
  } 

  addTransactionDetails(transactionType:string,transactionAmount:number,transactionName:string){
      transactionArr.push(
        {
          transactionName:transactionName,
          transactionType:transactionType,
          transactionAmount:transactionAmount,
        });
        alert('added transaction sucessfully');
        this.calculateIncomeExpense(transactionType,transactionAmount);
  }
  

 getTransactionDetails(){
    let transactionInputElements=(document.querySelectorAll('.input'));
    let transactionItem={
      transactionName:(transactionInputElements[0] as HTMLInputElement).value,
      transactionAmount:+(transactionInputElements[1] as HTMLInputElement).value,
      transactionType:(document.getElementById('type') as HTMLButtonElement).name,
    }
    return transactionItem;
  }

  calculateIncomeExpense(transactionType:string,transactionAmount:number){
    let {income,expense,balance}:IincomeExpense= this.state;
    if(transactionType ==='credit') {
      income=income+transactionAmount;
    } else if(transactionType === 'debit') {
      expense=expense+transactionAmount;
    }
    balance=income-expense;
    this.setState({
      balance:balance,
      income:income,
      expense:expense,
      transactionList:[...transactionArr],
    })
  }
  

  render() {
    const {balance,income,expense,transactionList}=this.state;
    return (
      <div className='expenseTracker'>
        <h3>Expense Tracker</h3>
        <IncomeExpenseInfo balance={balance} income={income} expense={expense}></IncomeExpenseInfo>
        <TransactionHistoryList transactionList={transactionList}></TransactionHistoryList>
        <InputTransactionDetailes 
            vaildateAddingTransaction={this.vaildateAddingTransaction}
            getTransactionDetails={this.getTransactionDetails}>
        </InputTransactionDetailes>
      </div>
    )
  }
}
