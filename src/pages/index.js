import React from 'react';
import {arrayOf, shape, string} from 'prop-types';
import Img from 'gatsby-image';
import {Card, CardActionArea, CardHeader} from '@material-ui/core';

export default function Presentations({data}) {
  return (
    <ol style={{listStyleType: 'none'}}>
      {data.allPresentationsYaml.edges.map(({node}) => (
        <li key={node.slides}>
          <Card>
            <CardActionArea>
              <a href={node.url}>
                <CardHeader title={node.title} />
                <Img fixed={node.childScreenshot.screenshotFile.childImageSharp.fixed} alt={node.title} />
              </a>
            </CardActionArea>
          </Card>
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
