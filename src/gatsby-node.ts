import { GatsbyNode } from "gatsby";

type AllMarkdownRemarkType = {
  edges: {
    node: {
      frontmatter: {
        title: string;
        slug: string;
        kind: string;
      };
    };
  }[];
};

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions;
  const blogPostTemplate = require.resolve(
    `./components/pages/termAndPolicy.tsx`,
  );
  const productdetailtemplate = require.resolve(
    `./components/pages/productdetail.tsx`,
  );
  const applyGeneralDepositTemplate = require.resolve(
    `./components/pages/applygeneraldeposit.tsx`,
  );
  const messageDetailTemplate = require.resolve(
    `./components/pages/messagedetail2.tsx`,
  ); //差分
  const noticesdetailTemplate = require.resolve(
    `./components/pages/noticesdetail.tsx`,
  );

  const result = await graphql<{ allMarkdownRemark: AllMarkdownRemarkType }>(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  } else {
    const { data } = result as {
      data: { allMarkdownRemark: AllMarkdownRemarkType };
    };
    data.allMarkdownRemark.edges.forEach(({ node }) => {
      console.log(node.frontmatter);
      if (
        node.frontmatter.title === "利用規約" ||
        node.frontmatter.title === "Privacy Policy"
      ) {
        createPage({
          path: node.frontmatter.slug,
          component: blogPostTemplate,
          context: {
            // additional data can be passed via context
            slug: node.frontmatter.slug,
          },
        });
      } else if (node.frontmatter.title === "SSSコース") {
        createPage({
          path: node.frontmatter.slug,
          component: applyGeneralDepositTemplate,
          context: {
            // additional data can be passed via context
            slug: node.frontmatter.slug,
          },
        });
      } else if (node.frontmatter.kind === "messagedetail") {
        createPage({
          path: node.frontmatter.slug,
          component: messageDetailTemplate,
          context: {
            // additional data can be passed via context
            slug: node.frontmatter.slug,
          },
        });
      } else if (node.frontmatter.kind === "noticesdetail") {
        createPage({
          path: node.frontmatter.slug,
          component: noticesdetailTemplate,
          context: {
            // additional data can be passed via context
            slug: node.frontmatter.slug,
          },
        });
      } else {
        createPage({
          path: node.frontmatter.slug,
          component: productdetailtemplate,
          context: {
            // additional data can be passed via context
            slug: node.frontmatter.slug,
          },
        });
      }
    });
  }
};
