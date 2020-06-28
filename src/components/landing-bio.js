import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
`

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center; 
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const XttyImage = styled.img`
  margin: 0 0 0 0;
  padding-right: 1.2rem;
`

const Description = styled.p`
  font-family: 'IBM Plex Mono', monospace;
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 3.5rem;
  margin-bottom: 0;
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <NameContainer>
            <XttyImage src="https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png" />
            <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          </NameContainer>
          <Description>{data.site.siteMetadata.subtitle}</Description>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
