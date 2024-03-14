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
import Services from "@solid-ui-blocks/FeaturesWithPhoto/Block02";
import ServicesDetails from "@solid-ui-blocks/Faq/Block02";
//import ServicesDetails from "../../../@elegantstack/solid-ui-blocks/Faq/Block02";
import Contact from "@solid-ui-blocks/CallToAction/Block02";
import Footer from "@solid-ui-blocks/Footer/Block01";
import { normalizeBlockContentNodes } from "@blocks-helpers";
import styles from "./_staffstyles";

const StaffAugmentation = (props) => {
  const { allBlockContent } = props.data;
  const content = normalizeBlockContentNodes(allBlockContent?.nodes);

  return (
    <Layout {...props}>
      <Seo title="Staff Augmentation | the hpl company" />
      {/* Modals */}
      <ModalWithTabs content={content["contact"]} />
      <ModalSimple content={content["termsofuse"]} />
      {/* Blocks */}
      <Header content={content["header-light"]} />
      <Container variant="full" sx={styles.heroContainer}>
        <Hero content={content["hero"]} />
        <Divider space="4" />
        <Container variant="cards.paper-lg" sx={styles.servicesAContainer}>
          <Services content={content["staffaugmentation_services"]} />
        </Container>
      </Container>
      <Divider space="5" />
      <ServicesDetails content={content["staff_augmentation_questions"]} />
      <Divider space="5" />
      <Divider space="4" />
      <Contact content={content["staffaug_cta"]} />
      <Divider space="5" />
      <Footer content={content["footer"]} />
    </Layout>
  );
};

export const query = graphql`
  query InnerpageStaffAugBlockContent {
    allBlockContent(
      filter: {
        page: { in: ["site/services/staff-augmentation", "shared", "assets"] }
      }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`;

export default StaffAugmentation;
