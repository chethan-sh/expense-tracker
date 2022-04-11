import React, { Component } from 'react'
import { transactionItem } from './interfaces'
import { Heading } from './heading'
import { IstateTransactionDetails } from './interfaces';
const amountType = {
  type: 'credit'
}

interface Iinput {
  balance: number;
  addTransactionDetails: (e: transactionItem) => void;
}

export class InputTransactionDetailes extends Component<Iinput, IstateTransactionDetails> {
  constructor(props: Iinput) {
    super(props);
    this.handleOnchange = this.handleOnchange.bind(this);
    this.state = {
      transactionType: amountType.type,
      transactionAmount: 0,
      transactionName: '',
    }
  }

  toggleTransactionType = () => {
    this.setState((prevState) => {
      let transactionType;
      if ((prevState.transactionType) === amountType.type) {
        transactionType = 'debit';
      } else {
        transactionType = 'credit';
      }
      return { transactionType: transactionType }
    })
  }

  isValidationSuccessful({ transactionType, transactionAmount, transactionName }: transactionItem) {
    const { balance }: any = this.props
    let validationStatus: boolean = false;
    if (transactionName === '' || (!isNaN(+transactionName))) {
      alert('invalid transaction Name');
    } else if (transactionAmount <= 0) {
      alert('invalid transaction amount');
    }
    else if (transactionType === 'debit' && ((balance - transactionAmount) < 0)) {
      alert('LOw Balance cant add data');
    } else {
      validationStatus = true;
    }
    return validationStatus;
  }

  handleOnchange(e: React.ChangeEvent<HTMLInputElement>) {
    let inputElement = e.currentTarget;
    let value = inputElement.value;
    if (inputElement.name === 'transactionName') {
      this.setState({ transactionName: value })
    } else if (inputElement.name === 'transactionAmount') {
      this.setState({ transactionAmount: (+value) })
    }
  }

  getTransactionDetails() {
    const { transactionType, transactionName, transactionAmount } = this.state;
    let transactionItem = {
      transactionType,
      transactionAmount,
      transactionName,
    }
    return transactionItem;
  }

  handleDataSubmit() {
    const transactionItem: transactionItem = this.getTransactionDetails();
    if (this.isValidationSuccessful(transactionItem)) {
      this.props.addTransactionDetails(transactionItem);
    }
  }

  render() {
    const { transactionType, transactionName, transactionAmount } = this.state;
    return (
      <div className='inputTransactionDetails'>
        <Heading headingtext='Add new transaction'></Heading>
        <input
          name='transactionName'
          value={transactionName}
          placeholder='transaction name'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleOnchange(e)}
          className='input' type='text'
        />
        <input
          name='transactionAmount'
          value={transactionAmount}
          placeholder='transaction amount'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleOnchange(e)}
          className='input' type="number"
        />
        <button id='type'
          name={transactionType}
          onClick={this.toggleTransactionType}
        >{transactionType}</button>
        <button onClick={() => this.handleDataSubmit()}>Add Transactions</button>
      </div>
    )
  }
}

// interface k{
//   handleDataSubmit:()=>void
// }
// export  class CreateUI extends Component<k,{}> {
//   constructor(props:k) {
//     super(props)
//   }
//   render() {
//     const {handleDataSubmit}:any=this.props;
//     let arr:any=[];
//     Elements.forEach((obj:any)=>{
//       let ele;
//       if(obj.element==='label') {
//         ele=(<p>{obj.text}</p>)
//       } else if(obj.element==='input'){
//         ele=(<input type={obj.type}></input>)
//       } else if(obj.element==='button') {
//         ele=(<button onClick={()=>handleDataSubmit}>{obj.text}</button>)
//       }
//       arr.push(ele);
//     })
//     console.log(arr);
//     return (
//       <div>
//         {arr}
//       </div>
//     )
//   }
// }



