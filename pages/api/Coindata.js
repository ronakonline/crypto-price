var request = require('request')
export default async function allcoins (req,res) {
    // const coins = await fetch(`https://api.coinlore.net/api/tickers/`).then(res => res.json());
    // res.send(coins.data);

    request(
        {    method: 'GET',
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        qs: {
          'start': '1',
          'limit': '10',
          'convert': 'INR',
        },
        headers: {
          'X-CMC_PRO_API_KEY': 'ffe69135-c50c-4f98-9cc2-c55de2c313f2'
        },
        json: true,
        gzip: true
        }
      , function (error, response, body) {
          // body is the decompressed response body
         // console.log('server encoded the data as: ' + (response.headers['content-encoding'] || 'identity'))
          //console.log('the decoded data is: ' + body)
          var coninsres = body
          res.send(coninsres.data);
        })
}