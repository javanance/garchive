/* eslint-disable react-hooks/exhaustive-deps */
// import Head from 'next/head';
// import { useRouter } from 'next/router';
// import { useEventListener, useMountEffect, useUnmountEffect } from 'primereact/hooks';
// import { classNames } from 'primereact/utils';
import React, { useContext, useEffect, useRef } from 'react';
// import AppFooter from './AppFooter';
// import AppSidebar from './AppSidebar';
import AppMenu from './AppMenu';
import AppRightbar from './AppRightbar';
// import AppConfig from './AppConfig';
// import PrimeReact from 'primereact/api';
// import { ChildContainerProps, LayoutState, AppTopbarRef } from '../types/types';

const ContentLayout = (props) => {    
    const { menu, rightMenu, pageUrl, children} = props

    const sidebarRef = useRef<HTMLDivElement>(null);

    return (
        <React.Fragment>
            {/* <div class="grid">
                <div ref={sidebarRef} class="col-2">
                    <AppMenu menu =  { menu} />
                </div>
                <div class="col-10">
                    <div class="col-9">
                        {children}
                    </div>
                    <div class ="col-3">
                        <AppRightbar menu = {rightMenu}  pageUrl = {pageUrl}/>
                    </div>
                </div>
            </div> */}
            <div className="layout-main-container">
                <div ref={sidebarRef} className="layout-sidebar">
                    <AppMenu menu =  { menu} />
                </div>
                <div className ="layout-main">
                    <div className="layout-doc-main markdown-body">
                        {children}
                    </div>
                    <div className ="layout-right-sidebar">
                        <AppRightbar menu = {rightMenu}  pageUrl = {pageUrl}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ContentLayout;
