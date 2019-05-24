import React, { Component } from 'react'
import Link from './Link'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`
class LinkList extends Component {
  render() {

    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          const linksToRender = data && data.feed && data.feed.links || []
          return linksToRender.map(link => <Link key={link.id} link={link} />)
        }}
      </Query>
    )
  }
}

export default LinkList