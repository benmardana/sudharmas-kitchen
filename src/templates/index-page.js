import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import IndexPage from '../components/IndexPageTemplate';

const IndexPageWrapper = ({ data }) => {
  const { heroImage, title, subtitle } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <IndexPage heroImage={heroImage} title={title} subtitle={subtitle} />
    </Layout>
  );
};

IndexPageWrapper.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPageWrapper;

export const pageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heroImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        subtitle
      }
    }
  }
`;
