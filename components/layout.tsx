import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import { ReactNode } from 'react';

type LayoutProps = {
    title: string,
    header: string,
    children: ReactNode,
}

const Layout = (props: LayoutProps) => {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
            </Head>
            <Header header={props.header} />
            <div className="container">
                <h3 className="my-3 text-primary text-center">
                    {props.title}
                </h3>
                {props.children}
            </div>
            <Footer footer="copyright Shinichi Morimoto." />
        </div>
    )
};

export default Layout;