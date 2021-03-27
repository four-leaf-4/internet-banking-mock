import React from "react";
import { graphql } from "gatsby";
import Layout from "~/components/templates/onecolumn";
import { Typography, Box, Button } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export default function NoticesDetailTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { titlearea, mainarea } = mystyles();

  const hundleClick = () => {
    window.close();
  };

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
      </Box>
      <Button onClick={hundleClick}>CLOSE</Button>
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
      }
    }
  }
`;
