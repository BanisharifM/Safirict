import BaseLayout from "components/Global/BaseLayout";
import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import "../assets/css/global.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Head>
        <title>شرکت سفیر ارتباطات</title>
      </Head>
      <Component {...pageProps} />
    </BaseLayout>
  );
}
