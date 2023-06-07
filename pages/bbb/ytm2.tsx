import React, { useContext, useRef, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { NodeRef, Page } from '../../types/types';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Ripple } from 'primereact/ripple';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';

import RootLayout from '../../layout/rootlayout'
import AppConfig from '../../layout/AppConfig';
import ContentLayout from '../../layout/contentLayout';
import { LayoutContext } from '../../layout/context/layoutcontext';
import JSON from '../../layout/kicsSidebar.json';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const inter = Inter({ subsets: ['latin'] })

const ytm2Page: Page = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { layoutConfig } = useContext(LayoutContext);
  const menuRef = useRef<HTMLElement | null>(null);
  // const { data, error } = useSWR("https://ga97cc90d41a6f3-arazordb.adb.ap-seoul-1.oraclecloudapps.com/ords/arzor/mv/all", fetcher);
const baseYymm ='202301'
  const fetchUrl = "https://ga97cc90d41a6f3-arazordb.adb.ap-seoul-1.oraclecloudapps.com/ords/arzor/ytm/baseYymm/" + baseYymm;
  const { data, error } = useSWR(fetchUrl, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  console.log('ddd : ' + data.items[0].id);
//   const bonds = data.items.slice(1,10);
  const bonds = data.items;
  
  const toggleMenuItemClick = () => {
      setIsHidden((prevState) => !prevState);
  };
  
  const columns = [
      {field: 'base_date', header: '기준일자'},
      {field: 'siga_brn_cd', header: '금리코드'},
      {field: 'm0003', header: '3M'},
      {field: 'm0006', header: '6M'},
      {field: 'm0009', header: '9M'},
      {field: 'm0012', header: '1Y'},
      {field: 'm0018', header: '18M'},
      {field: 'm0024', header: '2Y'},
      {field: 'm0030', header: '30M'},
      {field: 'm0036', header: '3Y'},
      {field: 'm0048', header: '4Y'},
      {field: 'm0060', header: '5Y'},
      {field: 'm0084', header: '7Y'},
      {field: 'm0120', header: '10Y'},
      {field: 'm0180', header: '15Y'},
      {field: 'm0240', header: '20Y'},
      {field: 'm0360', header: '30Y'},
      {field: 'm0600', header: '50Y'}
  ];
  
  return (
      <>
          <h2>
              {'Dynamic Gridlines'}
          </h2>
      <div className="surface-0 flex justify-content-center">

      <DataTable value={bonds} showGridlines   sortMode="multiple" columnResizeMode="expand" resizableColumns  
                    paginator rows={25} rowsPerPageOptions={[5, 10, 25, 50]}
                  selectionMode="multiple" removableSort  sortField="base_date" sortOrder={-1} tableStyle={{ minWidth: '50rem' }}>
          {columns.map((col, i) => (
              <Column key={col.field} field={col.field} header={col.header} sortable align='center' />
              ))} 
      </DataTable>
      </div>
      
      </>
  );
};

ytm2Page.getLayout = function getLayout(page) {
  // const {models} = JSON;

  return (
      <React.Fragment>
          <RootLayout>
              {/* <ContentLayout menu ={models}> */}
                  {/* {page} */}
                  <h1>
                      {'AAAAA'}
                  </h1>
              {page}
              {/* </ContentLayout> */}
          </RootLayout> 
      </React.Fragment>
  );
};

export default ytm2Page;