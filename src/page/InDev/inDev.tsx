import React from 'react';
import { useLocation } from "react-router";

function InDev() {
    const styleComp: React.CSSProperties = {
        marginTop:'20%',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        color: 'lightGrey'
    };
    const location = useLocation();
    const pathSegments = location.pathname.split('/');

    return (
        <h1 style={styleComp}>{pathSegments[1]} - в разработке</h1>  
    );
}

export default InDev;