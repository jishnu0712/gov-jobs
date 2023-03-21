import stylesC from "./navbar.module.css"
import React from 'react'

const Navbar = () => {
    return (
        <div className={stylesC.navbar}>
           <ul className={stylesC.navbody}>
                <li className={stylesC.navItems}>Home</li>
                <li className={stylesC.navItems}>Updates</li>
                <li className={stylesC.navItems}>Apply</li>
                <li className={stylesC.navItems}>Contact</li>
           </ul>
        </div>
    )
}

export default Navbar