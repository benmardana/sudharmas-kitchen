import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../Layout';
import styles from './tag.module.scss';

const Tag = ({ data, pageContext }) => {
  const { edges: posts, totalCount } = data.allMarkdownRemark;
  const { tag } = pageContext;
  const { title } = data.site.siteMetadata;

  return (
    <Layout>
      <Helmet title={`${tag} | ${title}`} />
      <section className={styles.Section}>
        <p>
          {`${totalCount} post${
            totalCount === 1 ? '' : 's'
          } tagged with “${tag}”`}
        </p>
        <ul>
          {posts.map((post) => (
            <li key={post.node.fields.slug}>
              <Link to={post.node.fields.slug}>
                <p>{post.node.frontmatter.title}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p>
          <Link to="/tags/">Browse all tags</Link>
        </p>
      </section>
    </Layout>
  );
};

export default Tag;
