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
    }
  ]
};
