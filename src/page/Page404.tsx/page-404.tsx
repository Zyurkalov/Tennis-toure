import React from 'react';

function Page404() {
    const styleComp: React.CSSProperties = {
        marginTop:'20%',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        color: 'lightGrey'
    };

    return (
        <h1 style={styleComp}>Такой страницы не существует</h1>  
    );
}

export default Page404;