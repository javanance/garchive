/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { useRouter } from 'next/router';
import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { AppTopbarRef } from '../types/types';
import { LayoutContext } from './context/layoutcontext';
import { Menubar } from 'primereact/menubar';
// import JSON from  './topmenu.json';

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);

    const router = useRouter();

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));

    // const {models} = JSON;
    // console.log(models);
    // const model = models;

    const model1 = [
        {
            label: "About",
            icon: "pi pi-fw pi-circle-fill",
            command: () => {
                router.push('/');
            }
        }
        // ,{
        //     label: "Notice",
        //     icon: "pi pi-fw pi-power-off",
        //     command: () => {
        //         router.push('/posts/click-me');
        //     }
        // }
       ,{ label: "IFRS17", icon: "pi pi-fw pi-circle-fill", command: () => {router.push('/ifrs/bbb');}}
       ,{ label: "KICS", icon: "pi pi-fw pi-circle-fill",   command: () => { router.push('/kics/intro');}}
        ,{
            label: "Archives",
            items: [
                 { label: "IFRS17", icon: "pi pi-fw pi-id-card", command: () => {router.push('/ifrs/bbb');}}
                ,{ label: "KICS", icon: "pi pi-fw pi-book",   command: () => { router.push('/kics/intro');}}
            ]
        }
    ]
    ;

    return (
        <div className="layout-topbar">
            <Link href="/" className="layout-topbar-logo">
                <img src={`/layout/images/G_logo_${layoutConfig.colorScheme !== 'light' ? 'white' : 'black'}.svg`} width="60px" height={'40px'} alt="logo" />
                <span>Gbook</span>
            </Link>

            <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle}>
                <i className="pi pi-bars" />
            </button>

            <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
                <i className="pi pi-ellipsis-v" />
            </button>

            <div ref={topbarmenuRef} className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
                <Menubar model={model1}  className = {classNames('layout-topbar-menubar')} />
                <button type="button" className="p-link layout-topbar-button">
                    <i className="pi pi-calendar"></i>
                    <span>Calendar</span>
                </button>
                <button type="button" className="p-link layout-topbar-button">
                    <i className="pi pi-user"></i>
                    <span>Profile</span>
                </button>
                <Link href="/documentation">
                    <button type="button" className="p-link layout-topbar-button">
                        <i className="pi pi-cog"></i>
                        <span>Settings</span>
                    </button>
                </Link>
            </div>
        </div>
    );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
