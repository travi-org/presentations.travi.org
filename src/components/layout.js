import React, {Fragment} from 'react';
import {node} from 'prop-types';
import Helmet from 'react-helmet';
import {graphql, StaticQuery} from 'gatsby';
import {Layout as LayoutComponent} from '@travi/matt.travi.org-components';

export default function Layout({children}) {
  return (
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
            >
              <meta name="theme-color" content="#c80000" />
            </Helmet>
            {children}
          </Fragment>
        )}
      />
    </LayoutComponent>
  );
}

Layout.propTypes = {
  children: node
};
