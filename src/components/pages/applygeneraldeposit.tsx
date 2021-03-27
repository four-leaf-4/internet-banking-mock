import React from "react";
import { navigate, graphql } from "gatsby";
import LayoutHome from "~/components/templates/layouthome";
import { Box, Button } from "@material-ui/core";
import { ConfirmationCategory } from "~/components/applygeneraldeposit/style1"; //差分
import { ConfirmationCategory2 } from "~/components/applygeneraldeposit2/style1"; //差分
import { mystyles } from "~/styles/makestyles";
import { BackBtn } from "~/components/common/backbtn";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location,
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark;
  // console.log(markdownRemark)
  // console.log(frontmatter)
  const { maincolumn, mainarea } = mystyles();

  const { title } = frontmatter;
  const confirm = (_event) => {
    navigate("/home/confirmgeneraldeposit");
  };

  return (
    <LayoutHome location={location}>
      <Box className={maincolumn}>
        <Box className={mainarea} bgcolor="primary.light">
          <ConfirmationCategory
            prop={{
              headline: "商品",
              value: [{ title: "商品", value: title }],
            }}
          />
          <ConfirmationCategory
            prop={{
              headline: "出金口座",
              value: [
                { title: "出金口座", value: "銀行 nnn支店 普通口座321321" },
              ],
            }}
          />
          <ConfirmationCategory2 />
          <Box mb={3}>
            <Button
              variant="contained"
              color="secondary"
              onClick={confirm} /* state={{ title }} */
            >
              確認
            </Button>
          </Box>
          <BackBtn />
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
        productID
        title
        overview
        term
        price
        HowToReceiveInterest
        cancelable
        date(formatString: "MMMM DD, YYYY")
        revise(formatString: "MMMM DD, YYYY")
        Maturity
      }
    }
  }
`;
