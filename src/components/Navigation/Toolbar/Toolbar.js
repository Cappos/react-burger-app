import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItems/NavigationItems';
import DrawerTaggle from '../SideDrawer/DraweToggle/DrawerTaggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerTaggle clicked={props.drawerTaggleClicked}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItem/>
        </nav>

    </header>
);

export default toolbar;