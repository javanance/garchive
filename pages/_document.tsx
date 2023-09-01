import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        console.log('###########_doc')
        // console.log(ctx);
        // console.log('@@@@@@');
        // console.log(initialProps);

        return { ...initialProps };
    }

    // aaa
    // lara-light-indigo

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link id="theme-css" href={`/themes/aaa/theme.css`} rel="stylesheet"></link>
                </Head>
                <body>
                   <script src="/move.js"></script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
