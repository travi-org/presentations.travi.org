module.exports = {
  siteMetadata: {
    title: 'Travi Presentations'
  },
  plugins: [
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './content/'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-screenshot',
      options: {
        nodeTypes: ['PresentationsYaml']
      }
    }
  ]
};
