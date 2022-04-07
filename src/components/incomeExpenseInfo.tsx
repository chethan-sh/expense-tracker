import React, { Component } from 'react'
import {IincomeExpense} from './interfaces'

export  class IncomeExpenseInfo extends Component<IincomeExpense,{}> {
  constructor(props:IincomeExpense) {
    super(props);
  }
  render() {
    const {income,expense,balance}=this.props;
    return (
      <div className="IncomeExpenseInfo">
          <h4>YOUR BALANCE</h4>
          <p style={{color:"green"}}>{balance}</p>
          <div className='IncomeExpenseInfoDiv'>
              <div className="incomeClass">
                  <p>INCOME</p>
                  <p style={{color:"green"}}>Rs:{income}</p>
              </div>
              <div className="expenseClass">
                  <p>EXPENSE</p>
                  <p style={{color:"red"}}>Rs:{expense}</p>
              </div>
          </div>
      </div>
    )
  }
}
