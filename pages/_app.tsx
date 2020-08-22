import BaseLayout from "components/Global/BaseLayout";
import type { AppProps /*, AppContext */ } from "next/app";
import "../assets/css/global.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}
