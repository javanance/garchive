// pages/posts/[slug].tsx
import { allPosts, type Post } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

// import { LayoutContext } from '../../layout/context/layoutcontext';
import RootLayout from '../../layout/rootlayout'
import ContentLayout from '../../layout/contentLayout'
import JSON from '../../layout/noticeSidebar.json';
import {Accordion, AccordionTab, Card, Panel, TabView, TabPanel, OverlayPanel, GSheet, DataTable, Column}  from '@/components/prime'
import { DataTableDemo }  from '@/components/dataTableDemo'

export async function getStaticPaths() {
  // Get a list of valid post paths.
  console.log('==========post');
  // console.log(allPosts);
  console.log(allPosts[0]._raw.flattenedPath);


  const paths = allPosts.map((post) => ({
    params: { slug: post._raw.flattenedPath.split('/').reverse().slice(0, 1)  },
  }))

  console.log('==========foreach');
  paths.forEach(a => console.log(a.params.slug));
  // console.log(paths[0].params.slug);

  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  console.log('-------------------post');
  console.log(context.params.slug[0]);

  console.log('-------------------post2');
  context.params.slug.forEach(s=> console.log(s));

  // Find the post for the current page.
  // const post = allPosts.find((post) => post._raw.flattenedPath === context.params.slug)

  const slug = context.params.slug.join('/');
  console.log('-------------------post4');
  console.log(slug);

  // const post = allKics.find((post) => post._raw.flattenedPath === slug)
  const post = allPosts.find((post) => post.url === slug)


  console.log('-------------------kics3');
  console.log(post?._id);

  // Return notFound if the post does not exist.
  if (!post) return { notFound: true }

  // Return the post as page props.
  return { props: { post } }
}

const usedcomponents = {
  Accordion, AccordionTab, Card, Panel, TabView, TabPanel, OverlayPanel, GSheet, DataTableDemo
};


export default function Page({ post }: { post: Post }) {
  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post.body.code)
  const {models} = JSON;

  return (
    // <RootLayout>
      <ContentLayout menu ={models}>
        <MDXContent  components={usedcomponents} />
      </ContentLayout>
    // </RootLayout>
  )

}
