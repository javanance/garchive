/* eslint-disable @next/next/no-img-element */
import React, { useContext, useRef, useState } from 'react';
import Link from 'next/link';

import { StyleClass } from 'primereact/styleclass';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Ripple } from 'primereact/ripple';
import { Divider } from 'primereact/divider';
import AppConfig from '../../layout/AppConfig';
import { LayoutContext } from '../../layout/context/layoutcontext';
import { NodeRef, Page } from '../../types/types';
import { classNames } from 'primereact/utils';

import RootLayout from '../../layout/rootlayout'
import ContentLayout from '../../layout/contentLayout';
import JSON from '../../layout/kicsSidebar.json';

import useSWR from 'swr';
 
const fetcher = (...args) => fetch(...args).then((res) => res.json());
 

const bbbPage: Page = () => {
    const [isHidden, setIsHidden] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);
    const menuRef = useRef<HTMLElement | null>(null);

    const { data, error } = useSWR("https://ga97cc90d41a6f3-arazordb.adb.ap-seoul-1.oraclecloudapps.com/ords/arzor/hr/employees/", fetcher);
    // const { data, error } = useSWR("https://ga97cc90d41a6f3-arazordb.adb.ap-seoul-1.oraclecloudapps.com/ords/arzor/mv/all", fetcher);
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    console.log('ddd : ' + data.items[0].ename);
    const bonds = data.items.slice(1,10);

    
    const toggleMenuItemClick = () => {
        setIsHidden((prevState) => !prevState);
    };
    
    const columns = [
        {field: 'empno', header: 'No', frozen : 'frozen'},
        {field: 'ename', header: 'Name'},
        {field: 'job', header: 'Job'},
        {field: 'sal', header: 'Quantity'}
    ];
    return (
        <>
            <h2>
                {'Basic'}
            </h2>
        <div className="surface-0 flex justify-content-center">
            <DataTable value={bonds} tableStyle={{ minWidth: '50rem' }}>
                <Column field="empno" header="Category"></Column>
                <Column field="ename" header="Code"></Column>
                <Column field="job" header="Name"></Column>
                <Column field="sal" header="Quantity"></Column>
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

bbbPage.getLayout = function getLayout(page) {
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

export default bbbPage;
