import React from 'react';
import logo from './logoShoppy02.png';

const Header = (props) => (
<header className="row">
    <div className="col-md-5">
        <img src={logo} className="logo" alt="logo" style={{
            height:100,
            width:150
            }} />
    </div>
    <div className="col-md-7 mt-5 subtitle">
        {props.subtitle}
    </div>
</header>
);


export default Header;