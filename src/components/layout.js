import React, {Fragment} from 'react';
import {node} from 'prop-types';
import Helmet from 'react-helmet';
import {CssBaseline} from '@material-ui/core';
import {graphql, StaticQuery} from 'gatsby';

export default function Layout({children}) {
  /* eslint-disable react/jsx-no-bind */
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <Fragment>
          <Helmet
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            defaultTitle={data.site.siteMetadata.title}
          />
          <CssBaseline />
          {children}
        </Fragment>
      )}
    />
  );
  /* eslint-enable react/jsx-no-bind */
}

Layout.propTypes = {
  children: node
};
