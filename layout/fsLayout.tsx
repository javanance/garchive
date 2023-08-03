/* eslint-disable react-hooks/exhaustive-deps */

import Head from 'next/head';
// import { useRouter } from 'next/router';
// import { useEventListener, useMountEffect, useUnmountEffect } from 'primereact/hooks';
import { classNames } from 'primereact/utils';
import React, { useContext, useEffect, useRef } from 'react';
import AppFooter from './AppFooter';
import AppSidebar from './AppSidebar';
import AppMenu from './AppMenu';
import AppRightbar from './AppRightbar';
import AppConfig from './AppConfig';
import PrimeReact from 'primereact/api';
import { ChildContainerProps, LayoutState, AppTopbarRef } from '../types/types';

// import {models} from './kicsSidebar.json';
import JSON from './fsSidebar.json';
const ContentLayout = ({ children }: ChildContainerProps) => {

    const sidebarRef = useRef<HTMLDivElement>(null);
    const {models} = JSON;
    // const model = models;

    return (
        <React.Fragment>
            <div className="layout-main-container">
                <div ref={sidebarRef} className="layout-sidebar">
                    {/* <AppSidebar menu ={model}/> */}
                    <AppMenu menu =  { models} />
                </div>
                <div className="layout-doc-main">
                    <h1>
                        'Content Layout in fsLayout.tsx with Main, Left, Right Sidebar'
                    </h1>

                    {children}
                    <div className ="layout-right-sidebar">
                        <AppRightbar />
                    </div>
                </div>


            </div>
        </React.Fragment>
    );
};

export default ContentLayout;
