import React from "react";
import { graphql } from "gatsby";
import { Container } from "theme-ui";
import Layout from "@solid-ui-layout/Layout";
import Seo from "@solid-ui-components/Seo";
import Divider from "@solid-ui-components/Divider";
import ModalWithTabs from "@solid-ui-blocks/Modal/Block01";
import ModalSimple from "@solid-ui-blocks/Modal/Block02";
import Header from "@solid-ui-blocks/Header/Block01";
import Hero from "@solid-ui-blocks/Hero/Block02";
import ContentOne from "@solid-ui-blocks/Content/Block01";
import ContentTwo from "@solid-ui-blocks/Features/Block06";
import Footer from "@solid-ui-blocks/Footer/Block01";
import { normalizeBlockContentNodes } from "@blocks-helpers";

const OurCompany = (props) => {
  const { allBlockContent } = props.data;
  const content = normalizeBlockContentNodes(allBlockContent?.nodes);

  return (
    <Layout {...props}>
      <Seo title="about the hpl company | the hpl company" />
      {/* Modals */}
      <ModalWithTabs content={content["authentication"]} reverse />
      <ModalWithTabs content={content["contact"]} />
      <ModalSimple content={content["advertisement"]} />
      <ModalSimple content={content["termsofuse"]} />
      {/* Blocks */}
      <Header content={content["header"]} />
      <Divider space="6" />
      <Hero content={content["hero"]} reverse />
      <Divider space="4" />
      <Container variant="narrow">
        <ContentOne content={content["content-one"]} />
      </Container>
      <Divider space="5" />
      <ContentTwo content={content["values"]} />
      <Divider space="5" />
      <Divider space="5" />
      <Divider space="5" />
      <ContentTwo content={content["services"]} />
      <Divider space="5" />
      <Divider space="5" />
      <Footer content={content["footer"]} />
    </Layout>
  );
};

export const query = graphql`
  query OurCompanyBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/about", "shared", "assets"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`;

export default OurCompany;
