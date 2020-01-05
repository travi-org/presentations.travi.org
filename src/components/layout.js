import React from 'react';
import {node} from 'prop-types';
import Helmet from 'react-helmet';
import {graphql, StaticQuery} from 'gatsby';
import {Layout as LayoutComponent} from '@travi/travi.org-theme-components';

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
          <>
            <Helmet
              titleTemplate={`%s | ${data.site.siteMetadata.title}`}
              defaultTitle={data.site.siteMetadata.title}
            >
              <meta name="theme-color" content="#c80000" />
            </Helmet>
            {children}
          </>
        )}
      />
    </LayoutComponent>
  );
}

Layout.propTypes = {
  children: node
};
