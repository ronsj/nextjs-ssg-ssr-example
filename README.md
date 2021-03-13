# A statically generated blog example using Next.js and Markdown

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) and [Server-side Rendering](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) features using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Demo

<!-- [https://next-blog-starter.vercel.app/](https://next-blog-starter.vercel.app/) -->

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

<!-- [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/blog-starter&project-name=blog-starter&repository-name=blog-starter) -->
# Notes

This example is based on the official `blog-starter` example. See the [repo](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) for more details.
