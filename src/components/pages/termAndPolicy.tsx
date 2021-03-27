import React from "react";
import { graphql } from "gatsby";
import Layout from "~/components/templates/onecolumn";
import { Typography, Box } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  console.log(markdownRemark);
  const { titlearea, mainarea } = mystyles();
  return (
    <Layout>
      <Box className={titlearea} component="section" bgcolor="primary.light">
        <Typography
          align="center"
          variant="body1"
          component="h2"
          color="textSecondary"
        >
          {frontmatter.title}
        </Typography>
      </Box>
      <Box className={mainarea} component="section" bgcolor="primary.light">
        <Box
          my={1}
          p={3}
          bgcolor="primary.base"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Typography align="right" variant="body2" component="p">
          {frontmatter.date}
        </Typography>
        <Typography align="right" variant="body2" component="p">
          改定日：{frontmatter.revise}
        </Typography>
      </Box>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        revise
      }
    }
  }
`;
