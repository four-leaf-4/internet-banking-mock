import React from "react";
import { graphql } from "gatsby";
import Layouthome from "~/components/templates/layouthome";
import { Box, Typography, Paper } from "@material-ui/core";
import { Headline } from "~/components/transferaccount/atomic/headline";
import { ProductDetailContent } from "~/components/templates/productdetailcontent/style2";
import { ApplyBtn } from "~/components/templates/productdetailcontent/atomic/applybtn";
import { BackBtn } from "~/components/common/backbtn";
import { mystyles } from "~/styles/makestyles";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location,
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  console.log(markdownRemark);
  console.log(frontmatter);
  const { maincolumn, mainarea } = mystyles();

  const { title } = frontmatter;

  return (
    <Layouthome location={location}>
      <Box className={maincolumn}>
        <Box className={mainarea} bgcolor="primary.light">
          <Headline prop={{ title: title }} />
          <ProductDetailContent prop={frontmatter} />
          <Paper>
            <Box my={1} p={3}>
              <Typography variant="h6">金利</Typography>
              <Box
                bgcolor="primary.base"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </Box>
          </Paper>
          <ApplyBtn prop={frontmatter} />
          <BackBtn />
        </Box>
      </Box>
    </Layouthome>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        productID
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        revise(formatString: "MMMM DD, YYYY")
        overview
        term
        price
        HowToReceiveInterest
        Maturity
        cancelable
      }
    }
  }
`;
