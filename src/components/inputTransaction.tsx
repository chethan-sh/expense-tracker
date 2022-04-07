import React, { Component } from 'react'
import { Heading } from './heading'
import {IaddTransactionProp} from './interfaces'
import {IstateTransactionDetails} from './interfaces'

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
      const {vaildateTransactionDetails,getTransactionDetails}=this.props;
      vaildateTransactionDetails(getTransactionDetails());
    }
    
  render() {
      const {transactionType}=this.state;
    return (
      <div className='inputTransactionDetails'>
          <Heading headingtext="Add new transaction"></Heading>
              <input placeholder='transaction name' className='input'  type='text'/>
              <input placeholder='transaction amount' className='input' type="number"/>
              <button id='type' name={transactionType} onClick={this.toggleTransactionType}>{transactionType}</button>
              <button onClick={()=>this.handleDataSubmit()}>Add Transactions</button>
      </div>
    )
  }
}


