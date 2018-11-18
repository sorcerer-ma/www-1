require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'ECUG - 实效云计算用户组',
    description:
      'ECUG 全称为 Effective Cloud User Group（实效云计算用户组），由七牛云CEO许式伟于2007年发起并壮大，历经十余年发展，集结了众多国内云计算领域最顶端的技术人和管理者。一个洋溢技术情怀的社区，关注A（AI）、B（Big Data）、C（Cloud）前沿技术的经验分享，输出技术人关注的热点干货。',
    keywords: ['ECUG', '云计算', '大数据', '人工智能', '高可用架构', '容器', '智慧运维'],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `ecug-website`,
        accessToken: `${process.env.API_KEY}`,
        fetchLinks: ['http://ecug-website.cdn.prismic.io'],
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
  ],
}
