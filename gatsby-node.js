const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicSpeaker {
        edges {
          node {
            data {
              id
              name
              title {
                text
              }
              company {
                text
              }
              description {
                text
              }
              photo {
                url
              }
            }
          }
        }
      }
    }
  `)

  const template = path.resolve("src/templates/speaker.jsx")

  pages.data.allPrismicSpeaker.edges.forEach(edge => {
    createPage({
      path: `/speakers/${edge.node.data.id}`,
      component: template,
      context: {
        id: edge.node.data.id,
      },
    })
  })
}
