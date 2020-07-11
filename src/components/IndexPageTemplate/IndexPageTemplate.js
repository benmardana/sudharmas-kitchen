import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import BlogRoll from '../BlogRoll';

import styles from './indexpagetemplate.module.scss';

const IndexPageTemplate = ({ heroImage, title, subtitle }) => (
  <>
    <div
      className={styles.HeroImage}
      style={{
        backgroundImage: `url(${
          !!heroImage.childImageSharp
            ? heroImage.childImageSharp.fluid.src
            : heroImage
        })`,
      }}
    >
      <div className={styles.HeroTextContainer}>
        <h1 className={styles.HeroText}>{title}</h1>
        <h3 className={`${styles.HeroText} ${styles.Small}`}>{subtitle}</h3>
      </div>
    </div>
    <section className={styles.Container}>
      <div className={styles.Content}>
        <h3 className={styles.Title}>Latest Recipes</h3>
        <BlogRoll />
        {/* TODO: COMPONENT THIS BUTTON */}
        <div className={styles.ReadMore}>
          <Link className="btn" to="/recipe">
            Read more
          </Link>
        </div>
      </div>
    </section>
  </>
);

IndexPageTemplate.propTypes = {
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default IndexPageTemplate;
