import Page from "../components/page";
import { initializeStore } from "../store";

export default function SSR() {
  return <Page />;
}
import React from 'react'


export function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  dispatch({
    type: "TICK",
    light: false,
    lastUpdate: Date.now(),
  });

  return {
    props: {
      initialReduxState: reduxStore.getState(),
    },
  };
}
