import React, { Component } from "react";
import { ITransactionItem } from "./interfaces";
import { Heading } from "./heading";

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
  ITransactionItem
> {
  constructor(props: Iinput) {
    super(props);
    this.handleOnchange = this.handleOnchange.bind(this);
    this.clearInputFields = this.clearInputFields.bind(this);
    this.state = {
      transactionType: amountType.credit,
      transactionAmount: 0,
      transactionName: ""
    };
  }

  clearInputFields() {
    this.setState({ transactionAmount: 0, transactionName: "" });
  }

  toggleTransactionType = () => {
    this.setState((prevState) => {
      let transactionType;
      if (prevState.transactionType === amountType.credit) {
        transactionType = "debit";
      } else {
        transactionType = "credit";
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
    let validationStatus: boolean = false;
    if (transactionName === "" || !isNaN(+transactionName)) {
      alert("Invalid Transaction Name");
    } else if (transactionAmount <= 0) {
      alert("Invalid Transaction Amount");
    } else if (
      transactionType === amountType.debit &&
      balance - transactionAmount < 0
    ) {
      alert("Low Balance Cant add Transaction");
    } else {
      validationStatus = true;
    }
    return validationStatus;
  }

  handleOnchange(e: React.ChangeEvent<HTMLInputElement>) {
    let inputElement = e.currentTarget;
    let value = inputElement.value;
    if (inputElement.name === "transactionName") {
      this.setState({ transactionName: value });
    } else if (inputElement.name === "transactionAmount") {
      this.setState({ transactionAmount: +value });
    }
  }

  getTransactionDetails() {
    const { transactionType, transactionName, transactionAmount } = this.state;
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
    }
    this.clearInputFields();
  }

  render() {
    const { transactionType, transactionName, transactionAmount } = this.state;
    return (
      <>
        <div className="inputTransactionDetails">
          <Heading headingtext="Add transaction" />
          <label>Transaction Name</label>
          <input
            name="transactionName"
            value={transactionName}
            placeholder="Name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.handleOnchange(e)
            }
            className="input"
            type="text"
          />
          <label>Transaction Amount</label>
          <input
            name="transactionAmount"
            value={transactionAmount}
            placeholder="transaction amount"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.handleOnchange(e)
            }
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
