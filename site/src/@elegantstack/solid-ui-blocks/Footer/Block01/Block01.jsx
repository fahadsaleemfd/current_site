import React from "react";
import { Link as GLink } from "gatsby";
import { Container, Box, Flex } from "theme-ui";
import ContentText from "@solid-ui-components/ContentText";
import ContentImages from "@solid-ui-components/ContentImages";
import ContentButtons from "@solid-ui-components/ContentButtons";
import WithDefaultContent from "@solid-ui-blocks/WithDefaultContent";
import DOBE from "../../../../../content/assets/flexiblocks/shared/dobe.svg"



const styles = {
  wrapper: {
    position: `relative`,
    bg: `footerBg`,
  },
  footer: {
    flexDirection: [`column-reverse`, `row`],
    justifyContent: `space-between`,
    alignItems: [`center`, `flex-start`],
    py: 5,
  },
};

const FooterBlock01 = ({ content: { images, collection } }) => {
  return (
    <Box sx={styles.wrapper}>
      <Container px="4">
        <Flex sx={styles.footer}>
          <Box sx={{ minWidth: 200 }}>
            <Box pb="1" mb="2" mt={[4, 0]}>
              <GLink to="/">
                <ContentImages content={{ images }} imageEffect="fadeIn" />
              </GLink>
            </Box>
            <Box pt="2" mb={[2, 4]}>
              © {new Date().getFullYear()}, the hpl company. All Rights 
              Reserved.
            </Box>
            <Box pt="1" mb={[2, 4]} sx={{display:'flex', alignItems:"center" , gap:"8px"}}>
            <img src={DOBE} height={40} width={40} /> 
             <p>1541 N Marion St Unit 18011, Denver, Colorado 80218</p>
            </Box>  
          </Box>
          {collection?.map(
            ({ text, buttons }, index) =>
              buttons && (
                <Box key={`item-${index}`} mb="3">
                  <ContentText
                    content={text?.[0]}
                    variant="h5"
                    sx={{ display: [`none`, `block`] }}
                  />
                  <ContentButtons
                    content={buttons}
                    variant="vertical"
                    wrapperStyles={{
                      flexDirection: [null, `column`],
                      flexWrap: `wrap`,
                      justifyContent: `center`,
                    }}
                  />
                </Box>
              )
          )}
        </Flex>
      </Container>
    </Box>
  );
};

FooterBlock01.defaultProps = {
  menuJustify: `flex-end`,
};

export default WithDefaultContent(FooterBlock01);
