import React from 'react'
import 'isomorphic-fetch'

export default class extends React.Component {
  static async getInitialProps() {
    const req = await fetch(`https://api.hackerwebapp.com/news`)
    const stories =await req.json()
    return { stories }
  }
  render() {
    return <div>
      <h1>Latest News</h1>
      {
        this.props.stories.map((story) => (
          <h2><a href={ story.url }>{ story.title }</a></h2>
        ))
      }

      <style jsx>{`
      h1 {
        font-family: system-ui;
        font-weight: 300;
        color: #333;
      }
    `}</style>
      <style global jsx></style>
    </div>
  }
}
