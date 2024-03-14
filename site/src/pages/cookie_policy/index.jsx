import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Hero/Block01'
import Content from '@solid-ui-blocks/Content/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Team from '@solid-ui-blocks/Teams/Block02'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const CookiePolicy = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Cookie Policy' />
      {/* Modals */}
      <ModalWithTabs content={content['contact']} />
      <ModalSimple content={content['advertisement']} />
      <ModalSimple content={content['termsofuse']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Container variant='full' sx={styles.heroContainer}>
        <Hero content={content['cookiehero']} reverse />
      </Container>
      <Divider space='5' />
      <Content content={content['cookiepolicyp']} />
      <Divider space='5' />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query CookiePolicyBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/cookie_policy", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default CookiePolicy
