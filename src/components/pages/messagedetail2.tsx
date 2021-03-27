import React from "react";
import { graphql } from "gatsby";
import LayoutHome from "~/components/templates/layouthome";
import { mystyles } from "~/styles/makestyles";
import { Box } from "@material-ui/core";
import { HeadLine } from "~/components/templates/messagedetail/headline2";
import { ToListBtn } from "~/components/templates/messagedetail/tolistbtn";

export default function MessageDetailTemplate({ data, location }) {
  const { maincolumn, mainarea } = mystyles();
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <LayoutHome location={location}>
      <Box className={maincolumn}>
        <Box className={mainarea} bgcolor="primary.light">
          <HeadLine frontmatter={frontmatter} />
          <Box
            my={1}
            p={3}
            bgcolor="primary.base"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Box textAlign="center">
            <ToListBtn />
          </Box>
        </Box>
      </Box>
    </LayoutHome>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        kind
        ID
        title
        date(formatString: "YYYY/MM/DD")
        time
      }
    }
  }
`;
