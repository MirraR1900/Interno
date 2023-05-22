import { useState } from 'react';
import Logo from "../Logo"
import Menu from "../Menu"
import MenuButtonMobile from "../MenuButtonMobile"
import './Header.scss'


function Header() {

    const [state, setState] = useState(false)

    function openCloseMenu() {
        if (state) {
            setState(false)
        } else {
            setState(true)
        }
    }

    return (
        <div className="container">
            <div className="app-header">
                <Logo />
                <div className="menuMobileContainer">
                    <MenuButtonMobile open={openCloseMenu} stateMenu={state} />
                </div>
                <div className="menuDesktopcontainer">
                    <Menu />
                </div>
            </div>
            <div className="menuMobile" data-active={state}>
                <Menu />
            </div>
        </div>
    )
}

export default Header