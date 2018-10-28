import React from 'react';
import {arrayOf, shape, string} from 'prop-types';
import Img from 'gatsby-image';

export default function Presentations({data}) {
  return (
    <ol>
      {data.allPresentationsYaml.edges.map(({node}) => (
        <li key={node.slides}>
          <a href={node.url}>
            {node.title}
          </a>
          <Img fixed={node.childScreenshot.screenshotFile.childImageSharp.fixed} alt={node.title} />
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
          url: string.isRequired
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
          url
          childScreenshot {
            screenshotFile {
              id
              childImageSharp {
                fixed(width: 384, height: 288) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
