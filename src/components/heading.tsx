import React, { Component } from 'react'

interface IheadindgProps{
    headingtext:string;
}
export class Heading extends Component<IheadindgProps,{}> {
  render() {
      const {headingtext} = this.props;
    return (
      <div className='heading'>{headingtext}</div>
    )
  }
}
