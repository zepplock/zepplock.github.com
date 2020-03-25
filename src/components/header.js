import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.0rem;
`

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`
const HomeLink = styled(NavLink)`
  font-size: 1.2rem;
  margin-right: 20px;
`

const SubHeader = styled.div`
  font-size: 0.9rem;
  font-style: italic;
`
const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: left;
  justify-content: left;
`
const Header = ({ siteTitle, siteSubTitle }) => (
  <SiteHeader>
    <Content>
      <HomeLink to="/">{siteTitle}</HomeLink>
      <SubHeader>{siteSubTitle}</SubHeader>
    </Content>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteSubTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteSubTitle: ``,
}

export default Header
