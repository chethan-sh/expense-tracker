import { Component } from "react";
import { Data } from "./data";
import "../App.css";
import { ITrackerData } from "./interfaces";

export default class TrackerData extends Component<ITrackerData> {
  render() {
    const { balance, income, expense } = this.props;
    return (
      <div className="TrackerData">
        <Data classname="dataBalance" type="Balance" value={balance}></Data>
        <Data classname="dataExpense" type="Income" value={income}></Data>
        <Data classname="dataIncome" type="Expense" value={expense}></Data>
      </div>
    );
  }
}
