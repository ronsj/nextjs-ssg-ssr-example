import Container from '../components/container'
// import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
// import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Link from 'next/link'
import { CMS_NAME } from '../lib/constants'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          <Link href="/ssr">
            <a className="link"><h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">→ SSR</h2></a>
          </Link>
          <br/>
          <pre><code>Next.js will pre-render this page on each request using the data returned by `<strong>getServerSideProps</strong>`</code></pre>
          <br/>
          <hr />
          <br/>
          <Link href="/ssg">
            <a className="link"><h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">→ SSG</h2></a>
          </Link>
          <br/>
          <pre><code>Next.js will pre-render this page at build time using the props returned by `<strong>getStaticProps</strong>`</code></pre>
          <br/>
          <pre><code>With getStaticProps you don't have to stop relying on dynamic content, as static content can also be dynamic. <strong>Incremental Static Regeneration</strong> allows you to update existing pages by re-rendering them in the background as traffic comes in.</code></pre>
        </Container>
        <style jsx>{`
          .link {
            color: royalblue;
          }
          .link:hover {
            text-decoration: underline;
          }

          pre {
            word-break: break-word;
            line-height: 2;
          }
          pre code {
            white-space: pre-wrap;
            line-height: 2;
          }
        `}</style>
        <style global jsx>{`
          body {
            line-height: 1.5;
          }
        `}</style>
      </Layout>
    </>
  )
}

// export async function getStaticProps() {
//   const allPosts = getAllPosts([
//     'title',
//     'date',
//     'slug',
//     'author',
//     'coverImage',
//     'excerpt',
//   ])

//   return {
//     props: { allPosts },
//   }
// }
