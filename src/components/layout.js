import React, {Fragment} from 'react';
import {node} from 'prop-types';
import Helmet from 'react-helmet';
import {CssBaseline} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {graphql, StaticQuery} from 'gatsby';
import {Layout as LayoutComponent, theme} from '@travi/matt.travi.org-components';

export default function Layout({children}) {
  /* eslint-disable react/jsx-no-bind */
  return (
    <MuiThemeProvider theme={theme}>
      <LayoutComponent>
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
      </LayoutComponent>
    </MuiThemeProvider>
  );
  /* eslint-enable react/jsx-no-bind */
}

Layout.propTypes = {
  children: node
};
