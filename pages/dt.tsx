import React, { useContext, useRef, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { NodeRef, Page } from '../types/types';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Ripple } from 'primereact/ripple';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';

import RootLayout from '../layout/rootlayout'
import AppConfig from '../layout/AppConfig';
import ContentLayout from '../layout/contentLayout';
import { LayoutContext } from '../layout/context/layoutcontext';
import JSON from '../layout/kicsSidebar.json';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const inter = Inter({ subsets: ['latin'] })

const dtPage: Page = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { layoutConfig } = useContext(LayoutContext);
  const menuRef = useRef<HTMLElement | null>(null);
  // const { data, error } = useSWR("https://ga97cc90d41a6f3-arazordb.adb.ap-seoul-1.oraclecloudapps.com/ords/arzor/mv/all", fetcher);

  const fetchUrl = "https://ga97cc90d41a6f3-arazordb.adb.ap-seoul-1.oraclecloudapps.com/ords/arzor/mv/KR3";
  const { data, error } = useSWR(fetchUrl, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  console.log('ddd : ' + data.items[0].id);
  const bonds = data.items.slice(1,10);
  
  const toggleMenuItemClick = () => {
      setIsHidden((prevState) => !prevState);
  };
  
  const columns = [
      {field: 'id', header: 'No'},
      {field: 'mv_nm', header: 'Name'},
      {field: 'asset_class', header: 'AssetClass'},
      {field: 'issue_date', header: 'Issue'},
      {field: 'mat_date', header: 'Maturity'}
  ];
  
  return (
      <>
          <h2>
              {'Basic'}
          </h2>
      <div className="surface-0 flex justify-content-center">
          <DataTable value={bonds} tableStyle={{ minWidth: '50rem' }}>
              <Column field="id" header="Category"></Column>
              <Column field="mv_nm" header="Code"></Column>
              <Column field="asset_class" header="Name"></Column>
              <Column field="issue_date" header="Quantity"></Column>
          </DataTable>

      </div>
          <h2>
              {'Dynamic Gridlines'}
          </h2>
      <div className="surface-0 flex justify-content-center">

      <DataTable value={bonds} showGridlines   sortMode="multiple" columnResizeMode="expand" resizableColumns  
                  selectionMode="multiple" removableSort  sortField="empno" sortOrder={-1} tableStyle={{ minWidth: '50rem' }}>
          {columns.map((col, i) => (
              <Column key={col.field} field={col.field} header={col.header} sortable align='center' />
              ))} 
      </DataTable>
      </div>
      
      </>
  );
};

dtPage.getLayout = function getLayout(page) {
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

export default dtPage;