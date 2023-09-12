// pages/posts/[slug].tsx
import { allKics, type Kics } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import ContentLayout from '../../layout/contentLayout'
import JSON from '../../layout/kicsSidebar.json';
import {Button, Accordion, AccordionTab, Card, Panel, TabView, TabPanel, OverlayPanel, DataTable, Column, Fieldset, Callout, M1, G2Col, GSheet, Math, Image, Cmt, CenterImg, Chip, Cl}  from '@/components/prime'
import OverlayDemo  from '@/components/overlayDemo'


export async function getStaticPaths() {
  // Get a list of valid post paths.
  console.log('==========kics');
  // console.log(allPosts);
  // console.log(allKics[0]._raw.flattenedPath);

  allKics.forEach(s=> console.log(s._raw.flattenedPath));

  const paths = allKics.map((post) => ({
    params: { slug: post._raw.flattenedPath.split('/').reverse().slice(0, 1)  },
  }))

  console.log('==========foreach');
  paths.forEach(a => console.log(a.params.slug));
  // console.log(paths[0].params.slug);

  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  console.log('-------------------kics');
  console.log(context.params.slug[0]);

  console.log('-------------------kics2');
  context.params.slug.forEach(s=> console.log(s));

  // Find the post for the current page.
  // const post = allPosts.find((post) => post._raw.flattenedPath === context.params.slug)

  const slug = context.params.slug.join('/');
  console.log('-------------------kics4');
  console.log(slug);

  // const post = allKics.find((post) => post._raw.flattenedPath === slug)
  const post = allKics.find((post) => post.url === slug)


  console.log('-------------------kics3');
  console.log(post?._id);

  // Return notFound if the post does not exist.
  if (!post) return { notFound: true }

  // Return the post as page props.
  return { props: { post } }
}

const usedcomponents = {
  Button, Accordion, AccordionTab, Card, Panel, TabView, TabPanel, OverlayPanel, DataTable, Column, Fieldset
  , Callout, M1, G2Col, GSheet, Math, OverlayDemo, Image, Cmt, CenterImg, Chip, Cl
};

export default function Page({ post }: { post: Kics }) {
  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post.body.code)
  const {models} = JSON;
  const url = post.url;
  const rightMenu = post.headings;

  console.log('===============kics/slug')
  console.log(rightMenu);
  console.log('url : '+ url);

  return (
      <ContentLayout menu ={models} rightMenu = {rightMenu}  pageUrl = {url} >
        <MDXContent components={usedcomponents} />
      </ContentLayout>
  )

}
