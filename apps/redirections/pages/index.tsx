export default function Page() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "https://www.workearly.gr/",
      permanent: true,
    },
  };
}
