export default async function allcoins (req,res) {
    const coins = await fetch(`https://api.coinlore.net/api/tickers/`).then(res => res.json());
    res.send(coins.data);
}