import './MenuButtonMobile.scss'

function MenuButtonMobile({open, stateMenu}) {

    return (
        <div className="menu-btn" data-active={stateMenu} onClick={open}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default MenuButtonMobile