import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head >
                    <meta property="og:url" content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
                    <meta property="og:type" content="article" />
                    <meta property="og:image" content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="language" content="Russian" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/icon.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument