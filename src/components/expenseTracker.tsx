
import React, { Component } from 'react'
import { TransactionHistory } from './transactionHistory'
import { InputTransactionDetailes } from './inputTransaction'
import { transactionArr } from '../transactionArr'
import {transactionItem} from './interfaces'
import '../App.css';
import { IincomeExpense } from './interfaces'
import { IexpenseTrackerState } from './interfaces'
import {Data} from './data'

export class ExpenseTracker extends React.Component<{},IexpenseTrackerState> {
  constructor(props:{}){
    super(props)
    this.addTransactionDetails=this.addTransactionDetails.bind(this);
    this.getTransactionDetails=this.getTransactionDetails.bind(this);
    this.vaildateTransactionDetails=this.vaildateTransactionDetails.bind(this);
    this.calculateIncomeExpense=this.calculateIncomeExpense.bind(this);
    this.state={
      balance:0,
      income:0,
      expense:0,
      transactionList:[],
    }
  }

  vaildateTransactionDetails({transactionType,transactionAmount,transactionName}:transactionItem){
    const balance=this.state.balance;
    console.log(transactionAmount+"jjj");
    if(transactionName ==='' || (!isNaN(+transactionName)) ) {
      alert("invalid transaction Name");
    } else if(transactionAmount<=0 ) {
      alert("invalid transaction amount");
    }
    else if(transactionType ==='debit' && ((balance-transactionAmount)<0)) {
      alert('LOw Balance cant add data');
    } else {
      this.addTransactionDetails(transactionType,transactionAmount,transactionName);
    }
  } 

  addTransactionDetails(transactionType:string,transactionAmount:number,transactionName:string){
      transactionArr.push(
        {
          transactionName,
          transactionType,
          transactionAmount,
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
    } else {
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
        <h3 style={{color:'black'}}>Expense Tracker</h3>
        <div className='IncomeExpenseInfoDiv'>
            <Data type='Balance' value={balance} ></Data>
            <Data type='INCOME' value={income} ></Data>
            <Data type='EXPENSE' value={expense} ></Data>
        </div>
        <TransactionHistory transactionList={transactionList}></TransactionHistory>
        <InputTransactionDetailes 
            vaildateTransactionDetails={this.vaildateTransactionDetails}
            getTransactionDetails={this.getTransactionDetails}>
        </InputTransactionDetailes>
      </div>
    )
  }
}
