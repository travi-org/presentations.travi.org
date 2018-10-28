import React from 'react';
import {arrayOf, shape, string} from 'prop-types';

export default function Presentations({data}) {
  return (
    <ol>
      {data.allPresentationsYaml.edges.map(presentation => (
        <li key={presentation.node.slides}>
          <a href={presentation.node.slides}>
            {presentation.node.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

Presentations.propTypes = {
  data: shape({
    allPresentationsYaml: shape({
      edges: arrayOf(shape({
        node: shape({
          title: string.isRequired,
          slides: string.isRequired
        }).isRequired
      })).isRequired
    }).isRequired
  }).isRequired
};

export const query = graphql`
  query PresentationsQuery {
    allPresentationsYaml {
      edges {
        node {
          title
          slides
        }
      }
    }
  }
`;
