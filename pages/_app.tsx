import "styles/globals.css";
import Layout from "../components/Layout";
import { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/morph/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
