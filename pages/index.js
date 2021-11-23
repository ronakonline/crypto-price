import { Box, Input, Container } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import CardList from "../components/cardlist";
import Darkmode from "../components/darkmode";
import PriceCard from "../components/PriceCard";

export async function getServerSideProps(context) {
  const host = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_VERCEL_URL : "http://localhost:3000";
  console.log(host);
  const res = await fetch(host+"/api/Coindata");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: { data } // will be passed to the page component as props
  };
}

export default function Home({ data }) {
  const [coins, setCoins] = useState(data);
  const [search, setSearch] = useState("");

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  // useEffect(() => {
  //   const res = fetch(`https://api.coinlore.net/api/tickers/`).then(res =>
  //     res.json()
  //   );
  //  // console.log(res);
  //   res.then(data => setCoins(data.data));
  // });

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Darkmode />
      <PriceCard data={coins[0]} />
      <Container mt={16} maxW="container.lg">
        <Input
          variant="outline"
          borderWidth={2}
          fontWeight="semibold"
          placeholder="Search Coin"
          size="lg"
          onChange={handleChange}
        />
      </Container>
      <Box mx={4} my={16}>
        <CardList data={filteredCoins}></CardList>
      </Box>
    </>
  );
}
