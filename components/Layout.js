import Head from 'next/head'
import React from 'react';

export default class extends React.Component {
  render() {
    return(
      <div>
        <Head>
          <title>{ this.props.title }</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

        { this.props.children }
      </div>
    )
  }
}
