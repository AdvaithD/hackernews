import React from 'react'
import 'isomorphic-fetch'
import Link from 'next/link'
import Layout from '../components/Layout'
import Comment from 'react-icons/lib/md/comment'
import Timeline from 'react-icons/lib/md/timeline'

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
          <div>
            <h2><a href={ story.url }>{ story.title }</a></h2>
            <p>
              <Link prefetch href={ `/story?id${story.id}` }><a className="traits">
                <Comment/> { story.comments_count } </a></Link> <div className="points"> <Timeline className="timeline"/> { story.points }</div>
            </p>
          </div>
        )) }

        <style jsx>{`
          .timeline {
            padding-right: 2px;
          }
          .traits, .points {
            display: inline;
          }
          .points {
            font-weight: 600;
          }
              div.hackernews {
        background-color: #eee;
        border-bottom: 1px solid rgba(0,0,0,0.1);
      },
      .traits {
        color: #FF4C00;
        font-weight: 600;
        padding-right: 15px;
      },
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
