module.exports = {
  siteMetadata: {
    title: 'Travi Presentations'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'roboto:300,400,500',
          'permanent marker:regular&text=Travi'
        ]
      }
    },
    'gatsby-plugin-material-ui',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {theme_color: '#c80000'}
    }
  ]
};
