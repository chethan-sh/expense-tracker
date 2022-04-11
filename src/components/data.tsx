
import { Component } from 'react'
import '../App.css';

interface IData {
  value: number,
  type: string,
}
export class Data extends Component<IData, {}> {
  render() {

    const { value, type } = this.props;
    const color: string = (type === 'INCOME' || type === 'Balance') ? 'green' : 'red';
    return (
      <div className='data'>
        <p>{type}</p>
        <p style={{ color: color }}>Rs:{value}</p>
      </div>
    )
  }
}
