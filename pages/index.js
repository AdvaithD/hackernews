import React from 'react'
import 'isomorphic-fetch'
import Layout from '../components/Layout'

export default class extends React.Component {
  static async getInitialProps() {
    const req = await fetch(`https://api.hackerwebapp.com/news`)
    const stories =await req.json()
    return { stories }
  }
  render() {
    return <Layout title="Latest News">
      <div className="hackernews">
        <h1>Latest News</h1>

        { this.props.stories.map((story) => (
          <h2><a href={ story.url }>{ story.title }</a></h2>
        )) }

        <style jsx>{`
              div.hackernews {
        background-color: #eee;
      }
              h1 {
        font-family: system-ui;
        font-weight: 300;
        font-size: 18px;
        background-color: #F0F0F0;
        color: #555;
      },
              h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        font-size: 16px;
        color: #181818;
        border-bottom: 1px solid #bdc3c7;
      }
              a {
        text-decoration: none;
      }
          `}</style>
        <style global jsx>{`
          body {
            background-color: #eee;
          }
        `}</style>
      </div>
      </Layout>
        }
}
