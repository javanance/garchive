/* eslint-disable react-hooks/exhaustive-deps */

import Head from 'next/head';
// import { useRouter } from 'next/router';
// import { useEventListener, useMountEffect, useUnmountEffect } from 'primereact/hooks';
import { classNames } from 'primereact/utils';
import React, { useContext, useEffect, useRef } from 'react';
import AppFooter from './AppFooter';
import AppSidebar from './AppSidebar';
import AppRightbar from './AppRightbar';
import AppMenu from './AppMenu';
import AppConfig from './AppConfig';
import PrimeReact from 'primereact/api';
import { ChildContainerProps, LayoutState, AppTopbarRef } from '../types/types';


// const ContentLayout = ({ children }: ChildContainerProps) => {
const ContentLayout = ( props) => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const { menu, children} = props
    const model = menu;

    return (
        <React.Fragment>
            <div className="layout-main-container">
                <div ref={sidebarRef} className="layout-sidebar">
                    {/* <AppSidebar menu ={models}/> */}
                    <AppMenu menu={model} />
                </div>
                <div className="layout-doc-main">
                    {'Content Layout in layout2.tsx with Main, Left, Right Sidebar'}

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
