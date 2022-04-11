import { Component } from 'react'
import {Data} from './data';
import '../App.css';

interface ITrackerData{
    balance:number,
    income:number,
    expense:number,
}
export default class TrackerData extends Component<ITrackerData> {
  render() {
      const {balance,income,expense}=this.props;
    return (
    <div className='TrackerData'>
        <Data type='Balance' value={balance} ></Data>
        <Data type='INCOME' value={income} ></Data>
        <Data type='EXPENSE' value={expense} ></Data>
    </div>
    )
  }
}
