import React from 'react'
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const FutureLetter = ({Component}) => {
    return (
        <>
            <Head>
                <title>FutureLetter</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            </Head>
            <AppLayout>
                {Component}
            </AppLayout>
        </>
    );
}
export default FutureLetter;
