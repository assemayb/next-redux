import Page from "../components/page";

export default function SSG () {
  return <Page />;
};

export function getStaticProps() {
  return {
    props: {
      initialReduxState: {
        lastUpdate: Date.now(),
        light: false,
      },
    },
  };
}
