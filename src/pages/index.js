import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
`

const Article = styled.div`
  padding: 10px;
  &:hover {
    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.2);
  }
`

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(240, 243, 189, 0.15),
    rgba(240, 243, 189, 0.8) 100%,
    rgba(240, 243, 189, 0.25)
  );
`

const ReadingTime = styled.h5`
  display: inline;
  color: #606060;
`

const Tag = styled.span`
  a {
    border-style: solid;
    border-width: thin;
    border-color: rgba(2, 195, 154, 0.8);
    color: #777;
    padding: 1px 6px;
    margin: 2px;
    text-align: center;
    text-decoration: none;
    border-radius: 8px;
    font-size: 0.9rem;
}
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Articles" />
      <Content>
        <h1>Articles</h1>
        {data.allMarkdownRemark.edges
          .filter(({ node }) => {
            const rawDate = node.frontmatter.rawDate
            const date = new Date(rawDate)
            return date < new Date()
          })
          .map(({ node }) => (
            <Article key={node.id}>
              <Link
                to={node.frontmatter.path}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <MarkerHeader>{node.frontmatter.title} </MarkerHeader>
                <div>
                  <ArticleDate>{node.frontmatter.date}</ArticleDate>
                  <ReadingTime> - {node.fields.readingTime.text}</ReadingTime>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {(node.frontmatter.tags || []).map(tag => <Tag><a href='http://google.com'>{tag}</a></Tag>)}
                </div>
                <p>{node.excerpt}</p>
              </Link>
            </Article>
          ))}
      </Content>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
            tags
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
