import React, { Component } from 'react'
import {IheadindgProps} from './interfaces'

export class Heading extends Component<IheadindgProps,{}> {
  render() {
      const {headingtext} = this.props;
    return (
      <div className='heading'>{headingtext}</div>
    )
  }
}
