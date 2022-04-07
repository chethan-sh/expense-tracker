import React, { Component } from 'react'
import { Heading } from './heading'
import {Elements} from '../inputElements'
import {transactionItem} from './interfaces'

interface IaddTransactionProp{
    vaildateAddingTransaction:({}:transactionItem)=>void;
    getTransactionDetails:()=>transactionItem;
}
interface IstateTransactionDetails{
  transactionType:string;
}
export class InputTransactionDetailes extends Component<IaddTransactionProp,IstateTransactionDetails> {
    constructor(props:IaddTransactionProp) {
        super(props);
        this.state={
          transactionType:'credit',
        } 
    }

    toggleTransactionType=()=>{
      this.setState((prevState)=>{
          let transactionType;
          if((prevState.transactionType)=='credit') {
            transactionType='debit';
          } else {
            transactionType='credit';
          }
          return {transactionType:transactionType}   
      })
    }

    handleDataSubmit(){
      const {vaildateAddingTransaction,getTransactionDetails}=this.props;
      vaildateAddingTransaction(getTransactionDetails());
    }
    
  render() {
      const {transactionType}=this.state;
    return (
      <div className='inputTransactionDetails'>
          <Heading headingtext="Add new transaction"></Heading>
          <div>
              <input className='input'  type='text'/>
          </div>
          <div>
              <input className='input' type="number"/>
              <button id='type' name={transactionType} onClick={this.toggleTransactionType}>{transactionType}</button>
          </div>
          <button onClick={()=>this.handleDataSubmit()}>Add Transactions</button>
      </div>
    )
  }
}


