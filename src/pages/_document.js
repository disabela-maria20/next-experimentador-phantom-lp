import Document, { Html, Head, Main, NextScript } from 'next/document'

class Documentos extends Document {
    render() {
        return(
            <Html lang="pt_BR">
                <Head>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Documentos