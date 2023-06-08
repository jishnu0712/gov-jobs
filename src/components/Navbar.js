import React from 'react';
// import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
import stylesC from "./navbar.module.css";

const Navbar = () => {
    return (
        // <AppBar position="static">
        //     <Toolbar variant="dense">
        //         <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        //             {/* <MenuIcon /> */}
        //         </IconButton>
        //         <Typography variant="h6" color="inherit" component="div">
        //             Photos
        //         </Typography>
        //     </Toolbar>
        // </AppBar>
         
        <div className={stylesC.navbar}>
            <ul className={stylesC.navbody}>
                <li className={stylesC.navItems}>Home</li>
                <li className={stylesC.navItems}>Updates</li>
                <li className={stylesC.navItems}>Apply</li>
                <li className={stylesC.navItems}>Contact</li>
            </ul>
        </div>
        
    );
};

export default Navbar;
