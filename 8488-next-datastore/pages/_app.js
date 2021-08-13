import React, { useEffect } from "react";
import App from "next/app";
import Head from "next/head";
import awsmobile from "../src/aws-exports";
import { Amplify, DataStore, Hub, withSSRContext } from "aws-amplify";
import { Blog } from "../src/models";

Amplify.configure({ ...awsmobile, ssr: true });

const MyApp = (props) => {
  const { Component, pageProps } = props;

  const Layout = Component.layout || (({ children }) => <>{children}</>);

  const eventHandler = async (capsule) => {
    const {
      payload: { event, data },
    } = capsule;

    console.log({ event, data });

    if (event === "ready") {
      try {
        const res = await DataStore.query(Blog);
        console.log({ res });
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    Hub.listen("datastore", eventHandler);

    DataStore.start();

    return () => {
      Hub.remove("datastore", eventHandler);
    };
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Hello</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
};

export default MyApp;
