import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import styled from "@emotion/styled"

// Components
import { Link, graphql } from "gatsby"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`

  return (
    <Layout>
      <Content>
        <h1>{tagHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            const { title, path } = node.frontmatter
            return (
              <li key={path}>
                <Link to={path}>{title}</Link>
              </li>
            )
          })}
        </ul>
      </Content>
    </Layout>
  )

  // return (
  //   <div>
  //     <h1>{tagHeader}</h1>
  //     <ul>
  //       {edges.map(({ node }) => {
  //         const { title, path } = node.frontmatter
  //         return (
  //           <li key={path}>
  //             <Link to={path}>{title}</Link>
  //           </li>
  //         )
  //       })}
  //     </ul>
  //     {/*
  //             This links to a page that does not yet exist.
  //             You'll come back to it!
  //           */}
  //     <Link to="/tags">All tags</Link>
  //   </div>
  // )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`