import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/public/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="min-h-full bg-slate-100 font-sans text-gray-700 antialiased dark:bg-slate-900 dark:text-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
