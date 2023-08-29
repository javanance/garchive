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

    // testtt 
    // lara-light-indigo
    // soho-light
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link id="theme-css" href={`/themes/testtt/theme.css`} rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
