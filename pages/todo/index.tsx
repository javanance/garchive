// pages/posts/[slug].tsx
import post from "@/.contentlayer/generated/Kics/kics__etc__todo.mdx.json";
import { useMDXComponent } from "next-contentlayer/hooks";
import ContentLayout from "../../layout/contentLayout";
import {
  Button,
  Accordion,
  AccordionTab,
  Card,
  Panel,
  TabView,
  TabPanel,
  OverlayPanel,
  DataTable,
  Column,
  Fieldset,
  Callout,
  M1,
  G2Col,
  GSheet,
  Math,
  Image,
  Cmt,
  CenterImg,
  Chip,
  Cl,
} from "@/components/prime";
import OverlayDemo from "@/components/overlayDemo";

const usedcomponents = {
  Button,
  Accordion,
  AccordionTab,
  Card,
  Panel,
  TabView,
  TabPanel,
  OverlayPanel,
  DataTable,
  Column,
  Fieldset,
  Callout,
  M1,
  G2Col,
  GSheet,
  Math,
  OverlayDemo,
  Image,
  Cmt,
  CenterImg,
  Chip,
  Cl,
};

export default function Page() {
  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post.body.code);
  const url = post.url;
  const rightMenu = post.headings;
  const models = [
    {
      label: "Disclaimer",
      items: [{ label: "TODO", icon: "pi pi-fw pi-truck", to: "/todo" }],
    },
  ];

  return (
    <ContentLayout menu={models} rightMenu={rightMenu} pageUrl={url}>
      <MDXContent components={usedcomponents} />
    </ContentLayout>
  );
}
