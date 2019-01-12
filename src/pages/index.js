import React from 'react';
import {arrayOf, shape, string} from 'prop-types';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';
import {Card, CardActionArea} from '@material-ui/core';
import {css} from 'emotion';
import Layout from '../components/layout';

const inlineListStyles = css({
  listStyleType: 'none',
  padding: 0,
  minHeight: '90vh',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignContent: 'space-around',
  li: {margin: '10px'}
});

export default function Presentations({data}) {
  return (
    <Layout>
      <ol className={inlineListStyles}>
        {data.allPresentationsYaml.edges.map(({node}) => (
          <li key={node.url}>
            <Card>
              <CardActionArea>
                <a href={node.url}>
                  {/* <CardHeader title={node.title} /> */}
                  <Img fixed={node.childScreenshot.screenshotFile.childImageSharp.fixed} alt={node.title} />
                </a>
              </CardActionArea>
            </Card>
          </li>
        ))}
      </ol>
    </Layout>
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
