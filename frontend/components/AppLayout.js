import React from 'react';
import Link from 'next/link';
import { Menu, Button } from 'antd';

const AppLayout = ({children}) => { 
    return (
        <>
            <Menu>
                <Menu.Item key="home"><Link href="/"><a>FutureLetter</a></Link></Menu.Item>
            </Menu>
            {children}
        </>
    );
};

export default AppLayout;