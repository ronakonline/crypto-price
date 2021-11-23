import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect,useState } from "react";
import CardList from "../components/cardlist";
import Darkmode from "../components/darkmode";
import PriceCard from "../components/PriceCard";

export async function getServerSideProps(context) {
  const res = await fetch(`https://api.coinlore.net/api/ticker/?id=80`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
 
  }

}

export default function Home({ data }) {
  const [coins, setCoins] = useState(data);

  useEffect(() => {
    const res = fetch(`https://api.coinlore.net/api/tickers/`).then(res =>
      res.json()
    );
   // console.log(res);
    res.then(data => setCoins(data.data));
  });

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Darkmode />
      <PriceCard data={coins[0]}/>
      <Box mx={4} my={16}>
        <CardList data={coins} ></CardList>
      </Box>
    </>
  );
}
