// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class _Document extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head />
                <body className='font-body'>
                    <Main />
                    <NextScript />

                    <script src="/__/firebase/7.14.1/firebase-app.js"></script>
                    <script src="/__/firebase/7.14.1/firebase-analytics.js"></script>
                    <script src="/__/firebase/init.js"></script>
                </body>
            </Html>
        )
    }
}

export default _Document