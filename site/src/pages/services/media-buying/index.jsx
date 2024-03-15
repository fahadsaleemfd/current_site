import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Features from '@solid-ui-blocks/Features/Block06'
import Clients from '@solid-ui-blocks/FeaturesWithPhoto/Block05'
import Companies from '@solid-ui-blocks/Companies/Block01'
import Faq from '@solid-ui-blocks/Faq/Block02'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const MediaBuyingService = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Media Buying Service | the hpl company' />
      {/* Modals */}
      <ModalWithTabs content={content['contact']} />
      <ModalSimple content={content['termsofuse']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Container variant='full' sx={styles.mediabuyingContainer}>
        <Features content={content['features']} />
      </Container>
      <Divider space='5' /> 
      <Divider space='5' />
      <Clients content={content['approach']} />
      <Divider space='4' />
      <Companies content={content['networks']} />
      <Divider space='5' />
      <Divider space='5' />
      <Faq content={content['mediafaq']} />
      <Divider space='5' />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query MediaBuyingBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/services/media-buying", "shared", "assets"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default MediaBuyingService
