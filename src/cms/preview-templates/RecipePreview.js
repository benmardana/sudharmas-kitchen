import React from 'react';
import PropTypes from 'prop-types';
import { RecipeTemplate } from '../../templates/recipe';

const RecipePreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags']);
  return (
    <RecipeTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  );
};

RecipePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default RecipePreview;
