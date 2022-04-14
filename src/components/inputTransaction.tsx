import React, { Component } from "react";
import { Heading } from "./heading";
import { ITransactionItem } from "./interfaces";
const amountType = {
  credit: "credit",
  debit: "debit"
};

interface Iinput {
  balance: number;
  addTransactionDetails: (e: ITransactionItem) => void;
}
export class InputTransactionDetailes extends Component<
  Iinput,
  { transactionType: string }
> {
  inputRef: {
    inputName: React.RefObject<HTMLInputElement>;
    inputAmount: React.RefObject<HTMLInputElement>;
  };

  constructor(props: Iinput) {
    super(props);
    this.clearInputFields = this.clearInputFields.bind(this);
    this.inputRef = {
      inputName: React.createRef(),
      inputAmount: React.createRef()
    };
    this.state = {
      transactionType: amountType.credit
    };
  }

  clearInputFields() {
    (this.inputRef.inputName.current as HTMLInputElement).value = "";
    (this.inputRef.inputAmount.current as HTMLInputElement).value = "";
  }

  toggleTransactionType = () => {
    this.setState((prevState) => {
      let transactionType;
      if (prevState.transactionType === amountType.credit) {
        transactionType = amountType.debit;
      } else {
        transactionType = amountType.credit;
      }
      return { transactionType: transactionType };
    });
  };

  isValidationSuccessful({
    transactionType,
    transactionAmount,
    transactionName
  }: ITransactionItem) {
    const { balance }: { balance: number } = this.props;
    let errorMsg;
    if (transactionName === "" || !isNaN(+transactionName)) {
      errorMsg = "Invalid Transaction Name";
    } else if (transactionAmount <= 0) {
      errorMsg = "Invalid Transaction Amount";
    } else if (
      transactionType === amountType.debit &&
      balance - transactionAmount < 0
    ) {
      errorMsg = "Low Balance Cant add Transaction";
    } else {
      return true;
    }
    alert(errorMsg);
    return false;
  }

  getTransactionDetails() {
    const { transactionType } = this.state;
    const transactionName = (this.inputRef.inputName
      .current as HTMLInputElement).value;
    const transactionAmount = +(this.inputRef.inputAmount
      .current as HTMLInputElement).value;
    const transactionItem = {
      transactionType,
      transactionAmount,
      transactionName
    };
    return transactionItem;
  }

  handleDataSubmit() {
    const transactionItem: ITransactionItem = this.getTransactionDetails();
    if (this.isValidationSuccessful(transactionItem)) {
      this.props.addTransactionDetails(transactionItem);
      this.clearInputFields();
    }
  }

  render() {
    const { transactionType } = this.state;
    return (
      <>
        <div className="inputTransactionDetails">
          <Heading headingtext="Add transaction" />
          <label>Transaction Name</label>
          <input
            ref={this.inputRef.inputName}
            name="transactionName"
            defaultValue=""
            placeholder="Name"
            className="input"
            type="text"
          />
          <label>Transaction Amount</label>
          <input
            ref={this.inputRef.inputAmount}
            min={0}
            name="transactionAmount"
            placeholder="transaction amount"
            className="input"
            type="number"
          />
          <button
            id="type"
            name={transactionType}
            onClick={this.toggleTransactionType}
          >
            {transactionType}
          </button>
          <button onClick={() => this.handleDataSubmit()}>
            Add Transactions
          </button>
        </div>
      </>
    );
  }
}
