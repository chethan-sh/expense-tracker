import React, { Component } from 'react'
import {IincomeExpense} from './interfaces'

export  class IncomeExpenseInfo extends Component<IincomeExpense,{}> {
  constructor(props:IincomeExpense) {
    super(props);
  }
  render() {
    const {income,expense,balance}=this.props;
    return (
          <div className='IncomeExpenseInfoDiv'>
            <IncomeExpense value={income} type='INCOME' classname='incomeClass' ></IncomeExpense>
            <IncomeExpense value={expense} type='EXPENSE' classname='expenseClass' ></IncomeExpense>
          </div>
    )
  }
}
interface IncomeExpenseProps{
  value:number,
  type:string,
  classname:string,
}
export class IncomeExpense extends Component<IncomeExpenseProps,{}> {
  constructor(props:IncomeExpenseProps) {
    super(props)
  }
  render() {
    const {value,type,classname}=this.props;
    const color:string=(type=='INCOME')?'green':'red';
    return (
      <div className={classname}>
          <p>{type}</p>
          <p style={{color:color}}>Rs:{value}</p>
      </div>
    )
  }
}



