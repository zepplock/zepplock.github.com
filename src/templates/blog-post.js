import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const MarkedHeader = styled.h1`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(240, 243, 189, 0.15),
    rgba(240, 243, 189, 0.8) 100%,
    rgba(240, 243, 189, 0.25)
  );
`

const HeaderDate = styled.h5`
  margin-top: 10px;
  color: #606060;
`

const Tag = styled.span`
  a {    
    background: rgba(2, 195, 154, 0.8);
    color: #fff;
    padding: 1px 6px;
    margin: 2px;
    text-align: center;
    text-decoration: none;
    border-radius: 8px;
    font-size: 0.8rem;
  }
`

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
  a {
    text-decoration: none;
    position: relative;

    background-image: linear-gradient(
      rgba(2, 195, 154, 0.8),
      rgba(2, 195, 154, 0.8)
    );
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
    &:hover {
      background-size: 100% 100%;
    }
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Content>
        <MarkedHeader>{post.frontmatter.title}</MarkedHeader>
        <HeaderDate>
          {post.frontmatter.date} - {post.fields.readingTime.text}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {(post.frontmatter.tags || []).map(tag => <Tag><a href={`/tags/${tag}`}>{tag}</a></Tag>)}
        </HeaderDate>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
        tags
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
