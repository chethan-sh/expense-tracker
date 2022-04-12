import { Component } from "react";
import "../App.css";

interface IData {
  classname: string;
  value: number;
  type: string;
}
export class Data extends Component<IData, {}> {
  render() {
    const { value, type, classname } = this.props;
    const color: string =
      type === "Income" || type === "Balance" ? "green" : "red";
    return (
      <div className={classname}>
        <p>{type}</p>
        <p style={{ color: color }}>Rs:{value}</p>
      </div>
    );
  }
}
