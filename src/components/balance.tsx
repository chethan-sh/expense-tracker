
import React, { Component } from 'react'
import {IbalanceProps} from './interfaces'
export class Balance extends React.Component<IbalanceProps,{}> {
  render() {
      const {balance}=this.props;
    return (
      <div className='balance'>
          <p>Balance</p>
          <p>{balance}</p>
      </div>
    )
  }
}
